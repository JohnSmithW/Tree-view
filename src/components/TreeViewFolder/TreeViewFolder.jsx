import React, { useEffect, useState } from 'react';
import './TreeViewFolder.scss';
import TreeViewNode from '../TreeViewNode/TreeViewNode';
import openFolder from '../../actions/openFolder';

export default function TreeViewFolder({ isOpen, onClick, list, label }) {
  const [treeList, setTreeList] = useState([]);

  useEffect(() => {
    setTreeList(list);
  }, []);

  return (
    <>
      <div className="tree-folder-container">
        <div
          onClick={() => {
            onClick();
          }}
          className="tree-folder"
        >
          <span className={isOpen ? 'tree-folder__item tree-folder__item_open' : 'tree-folder__item'}></span>
        </div>

        <span className="tree-folder-container__label">{label}</span>
      </div>
      <div className="tree-folder-container_child">
        {isOpen &&
          treeList &&
          treeList.map((item, index) => {
            if (item.list.length > 0) {
              return (
                <TreeViewFolder
                  key={index}
                  isOpen={item.isOpen}
                  onClick={() => {
                    openFolder(setTreeList, treeList, index);
                  }}
                  list={item.list}
                  label={item.label}
                />
              );
            } else {
              return <TreeViewNode key={index} child={true} label={item.label} />;
            }
          })}
      </div>
    </>
  );
}
