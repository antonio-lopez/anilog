export default function getRelations(relationsArray) {
  const relations = relationsArray.filter(
    (relation) =>
      relation.relationType.indexOf('ADAPTATION') > -1 ||
      relation.relationType.indexOf('PREQUEL') > -1 ||
      relation.relationType.indexOf('SEQUEL') > -1 ||
      relation.relationType.indexOf('PARENT') > -1
  );
  return relations;
}
