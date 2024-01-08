const fileDelimiter = "/";
const paramDelimiter = "__";

export function convertFilePathToURLParam(filePath: string) {
  return filePath.replaceAll(fileDelimiter, paramDelimiter);
}

export function convertURLParamToFilePath(urlParam: string) {
  return urlParam.replaceAll(paramDelimiter, fileDelimiter);
}
