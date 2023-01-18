/**
 * for RegExp escape
 *
 * @param str
 */
export function escapedRegExp (str: string) {
  return new RegExp(str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
}
