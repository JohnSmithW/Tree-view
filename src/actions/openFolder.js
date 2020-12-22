export default function openFolder(setTree, tree, id) {
  setTree(
    tree.map((element) => {
      if (element.id === id) {
        return { ...element, isOpen: !element.isOpen };
      }
      return element;
    }),
  );
}
