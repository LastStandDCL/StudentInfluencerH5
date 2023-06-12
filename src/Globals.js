import {IsDesktop} from "./utils/isDesktop";

const baseUrl = "http://127.0.0.1";
//const baseUrl = "https://www.npu5v5.cn";
export default {

    backendUrl: baseUrl + ":8849",

    oauthUrl: "https://git.npu5v5.cn",

    oauthRedirectUrl: baseUrl,
    //oauthRedirectUrl: baseUrl + ":3000",

    oauthId: "fb1eb7e31e1f92890d1dcec85ea7dd3f3311f4be1c4224dc4c323761928ee0d4",

    isDesktop: IsDesktop(),

    icp: "陕ICP备2022010605号-2",

    fontName: "",
}
