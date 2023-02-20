import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

function sharedModuleRule(): Rule {

    return (tree, context) => {

    }
}

export function sharedServices(_options: any): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        console.log(_options)
    };
}
