export const siteConfig = {
  signupUrl: "https://newtine-frontend.vercel.app/login", // 로그인 화면 URL
  serviceUrl: "https://newtine-frontend.vercel.app/", // 피드 화면 URL
  termsUrl: "https://daniel2231.notion.site/3e0af089b9eb80b6b6eeef77447c656a?source=copy_link",
  privacyUrl: "https://daniel2231.notion.site/3e0af089b9eb80f98b2cef5ba4b14d58?source=copy_link",
} satisfies Record<string, string>;

export function externalUrl(value: string): string | undefined {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}
