/** Escape `<` in JSON-LD so `</script>` in strings cannot break HTML parsing. */
export function safeJsonLdStringify(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
