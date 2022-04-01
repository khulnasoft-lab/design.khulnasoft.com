export class Node {
  constructor({ title, path, parent = null, depth }) {
    this.id = `${parent?.id || ''}${title}_${path}_`;
    this.title = title;
    this.path = path;
    this.parent = parent;
    this.depth = depth;
    this.isActive = false;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }

  /**
   * Activates the node and its parent.
   */
  activate() {
    this.isActive = true;
    this.parent?.activate();
  }

  /**
   * Deactivates the node.
   */
  deactivate() {
    this.isActive = false;
  }
}
