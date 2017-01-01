//see https://github.com/ngrx/example-app/blob/master/src/app/util.ts

let typeCache: { [label: string]: boolean } = {};
export function actionType<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}