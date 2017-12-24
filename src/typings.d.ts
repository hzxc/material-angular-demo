///<reference path="../node_modules/@types/jquery/index.d.ts"/>

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface JQuery {
  timeago(...any): any;
}
