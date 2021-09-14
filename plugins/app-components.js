import Vue from "vue";

// UI
import Intro from "@/components/UI/Intro.vue";
import Message from "@/components/UI/Message.vue";
import Posts from "@/components/Blog/Posts.vue";

// Controls
import AppInput from "@/components/UI/Controls/Input.vue";
import AppTextarea from "@/components/UI/Controls/Textarea.vue";
import AppButton from "@/components/UI/Controls/Button.vue";

Vue.component("Message", Message);
Vue.component("AppInput", AppInput);
Vue.component("AppTextarea", AppTextarea);
Vue.component("AppButton", AppButton);
Vue.component("Intro", Intro);
Vue.component("Posts", Posts);
