import { chain, externalSchematic, Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

function sharedModuleRule(): Rule {
    return (tree, context) => {
        return chain([
            // externalSchematic("@angular/schematics", "ng-add",)
        ])
    }
}


export function sharedServices(_options: any): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        const sharedRules: Rule = sharedModuleRule();
    };
}
