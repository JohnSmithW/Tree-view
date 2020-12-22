import React, { useEffect, useState } from 'react';
import './TreeViewFolder.scss';
import TreeViewNode from '../TreeViewNode/TreeViewNode';

export default function TreeViewFolder({ isOpen, onClick, list, isChild, label }) {
  const [treeList, setTreeList] = useState([]);

  useEffect(() => {
    setTreeList(list);
  }, []);

  function openFolder(id) {
    setTreeList(
      treeList.map((element) => {
        if (element.id === id) {
          return { ...element, isOpen: !element.isOpen };
        }
        return element;
      }),
    );
  }

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
                    openFolder(index);
                  }}
                  list={item.list}
                  isChild={true}
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
