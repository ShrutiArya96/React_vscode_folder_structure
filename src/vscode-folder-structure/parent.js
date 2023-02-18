import Explorer from './explore';
import explorer from './data/data.js';
import { useCallback, useState } from 'react';
import {insertNode, deleteNode} from './updateFolderDataStructure';


export default function ExploreParent() {
    const [explorerData, setexplorerData] = useState(explorer);

    const insertNodeToData = (id, name, isFolder) => {
      let updatedData = insertNode(explorerData, id, name, isFolder);
      setexplorerData(updatedData);
    };

    const deleteData = (id) => {
        let updatedData = JSON.parse(JSON.stringify(explorerData))
        updatedData = deleteNode(updatedData, id);
        setexplorerData(updatedData);
    }

    return (
        <Explorer updateExplorerData={insertNodeToData} deleteData={deleteData} explorerData={explorerData}/>
    )
}