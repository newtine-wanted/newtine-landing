export const siteConfig = {
  signupUrl: "", // 로그인 화면 URL
  serviceUrl: "", // 피드 화면 URL
  termsUrl: "",
  privacyUrl: "",
} satisfies Record<string, string>;

export function externalUrl(value: string): string | undefined {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}
