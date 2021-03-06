import React, { useState } from 'react';
import './TreeView.scss';
import TreeViewFolder from '../TreeViewFolder/TreeViewFolder';
import TreeViewNode from '../TreeViewNode/TreeViewNode';
import openFolder from '../../actions/openFolder';

export default function TreeView() {
  const [tree, setTree] = useState([
    {
      id: 0,
      isOpen: false,
      label: 'folder',
      list: [{ id: 0, isOpen: false, label: 'folder', list: [{ id: 0, isOpen: false, label: 'node', list: [] }] }],
    },
    { id: 1, isOpen: false, label: 'node', list: [] },
    {
      id: 2,
      isOpen: false,
      label: 'folder',
      list: [
        {
          id: 0,
          isOpen: false,
          label: 'node',
          list: [
            { id: 0, isOpen: false, label: 'node', list: [] },
            { id: 1, isOpen: false, label: 'node', list: [] },
          ],
        },
        { id: 1, isOpen: false, label: 'node', list: [] },
        {
          id: 2,
          isOpen: false,
          label: 'node',
          list: [
            {
              id: 0,
              isOpen: false,
              label: 'node',
              list: [
                { id: 0, isOpen: false, label: 'node', list: [] },
                { id: 1, isOpen: false, label: 'node', list: [{ id: 0, isOpen: false, label: 'node', list: [] }] },
              ],
            },
          ],
        },
        { id: 3, isOpen: false, label: 'node', list: [] },
      ],
    },
  ]);

  return (
    <div className="tree-main">
      <span className="tree-main__title">Tree view</span>

      <div className="tree custom-scroll">
        {tree.map((item, index) => {
          if (item.list.length > 0) {
            return (
              <TreeViewFolder
                key={index}
                onClick={() => {
                  openFolder(setTree, tree, index);
                }}
                isOpen={item.isOpen}
                list={item.list}
                label={item.label}
              />
            );
          } else {
            return <TreeViewNode key={index} isChild={false} label={item.label} />;
          }
        })}
      </div>
    </div>
  );
}

// function sort(list, id) {
//   if (Array.isArray(list)) {
//     if (list[id].isOpen === false) {
//       list[id].isOpen = true;
//     } else {
//       list[id].isOpen = false;
//     }
//   } else {
//     if (list.isOpen === false) {
//       list.isOpen = true;
//     } else {
//       list.isOpen = false;
//     }
//   }
// }
