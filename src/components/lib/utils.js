/**
 * for RegExp escape
 *
 * @param str
 */
export function escapedRegExp (str) {
  return new RegExp(str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
}
