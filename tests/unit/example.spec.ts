import { shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";
import { createRouter, createMemoryHistory } from "vue-router";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: "/", component: { template: "<div />" } }],
});

describe("NavBar.vue", () => {
  it("renders navbar", async () => {
    const wrapper = shallowMount(NavBar, {
      global: { plugins: [router] },
    });
    expect(wrapper.find("nav.navbar").exists()).toBe(true);
  });
});
