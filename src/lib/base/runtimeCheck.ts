export function validateToastRef(item: any) {
  if (!item.ref?.current) {
    const source = item.elm?._source
      ? `\n At source: ${JSON.stringify(item.elm?._source, null, "\t")}`
      : "";

    throw Error(
      `Error found the toast with missing "ref" props, please pass the 'ref' argument to the toast element.${source}`
    );
  }
}
