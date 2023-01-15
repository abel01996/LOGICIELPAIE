// export class TodoItemNode {
//     children!: TodoItemNode[];
//     name!: string;
//   }

  export class TodoItemNode {
    children: TodoItemNode[] | undefined;
    item: string | undefined;
  }
  
  /** Flat to-do item node with expandable and level information */
  export class TodoItemFlatNode {
    item: string | undefined;
    level: number | undefined;
    expandable: boolean | undefined;
  }