import React from 'react';
import './TreeViewNode.scss';

export default function TreeViewNode({ isChild, label }) {
  return (
    <div className={isChild ? 'tree-node-container tree-node-container_child' : 'tree-node-container'}>
      <div className="tree-node" />
      <span className="tree-folder-container__label">{label}</span>
    </div>
  );
}
