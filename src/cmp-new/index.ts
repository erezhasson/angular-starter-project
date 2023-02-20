import { chain, externalSchematic, Rule, schematic, SchematicContext, Tree } from '@angular-devkit/schematics';

export function cmpNew(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    let appliedRules: Rule = externalSchematic('@schematics/angular', 'ng-new', {
      name,
      directory: name,
    });

    if (!!_options.includeShared) {
      appliedRules = chain([schematic("shared-services", {}), appliedRules]);
    }

    return appliedRules;
  };
}
