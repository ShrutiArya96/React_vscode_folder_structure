import './explore.css';
import { useState, useRef, useEffect } from 'react';

export default function Explorer({updateExplorerData, deleteData, explorerData}) { 
    const [showFolderData, setShowFolderData] = useState(false);
    const inputReference = useRef(null);
    const [showInput, setShowInput] = useState({
        show: false,
        isFolder: false
    });
    console.log(updateExplorerData, explorerData);
    useEffect(() => {
        if(showInput.show && inputReference) {
            inputReference.current.focus();
        } 
    }, [showInput])

    function addNew(isFolder) {
        setShowFolderData(true);
        setShowInput({show: true,
            isFolder: isFolder
        })
       
    }

    function hideInput() {
        setShowInput({
            ...showInput, show: false
        })
    }

    function setInputData(evt) {
        if(evt.keyCode===13 && evt.target.value.length > 0) {
            setShowInput({
                ...showInput, show: false
            })
            let fileName = evt.target.value;
            inputReference.current.value = '';
            updateExplorerData(explorerData.id, fileName, showInput.isFolder)
        }
       
    }

    function deleteFolder() {
        deleteData(explorerData.id);
    }

    if(explorerData.isFolder) {
        return (
            <>
                <div className='folder-name'>
                    <span>{showFolderData ? '👇': '👉'}</span><span className='folder-name-span' onClick={() => setShowFolderData(!showFolderData)}>📁 {explorerData.name}</span>
                    <div className='actions'>
                        <button className='actions-btn' onClick={() => addNew(true)}>Add new folder</button>
                        <button className='actions-btn' onClick={() => addNew(false)}>Add new file</button>
                        <span onClick={deleteFolder} className='delete'>Delete</span>
                    </div>
                </div>
                <div className={showFolderData ? 'folder-container-show':'folder-container-hide'}>
                    <div className={showInput.show? 'show-input' : 'hide-input'}>
                        <span>{showInput.isFolder ? '📁': '📄'}</span>
                        <input ref={inputReference} onBlur={() => hideInput()} onKeyUp={(e) => {setInputData(e)}} />
                    </div>
                    {explorerData.items.map(level => <Explorer updateExplorerData={updateExplorerData} deleteData={deleteData} explorerData={level} />)}
                </div>
            </>
        )
    } else {
        return (
            <div className='file-name'><span className='folder-name-span'>📄 {explorerData.name}</span><span className='delete' onClick={deleteFolder}>Delete</span></div>
        )
    }

}