// *.svelte 파일 import 관련 문제를 해결하기 위해 타입을 정의합니다.
declare module "*.svelte" {
  export { SvelteComponentDev as default } from "svelte/internal";
}
