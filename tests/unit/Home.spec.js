import { shallowMount, mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import HelloWorld from "@/components/HelloWorld.vue";

describe("Home.vue", () => {
	it("renders Home header", () => {
		const wrapper = mount(Home);
		expect(wrapper.contains("h1")).toBe(true);
	});
});

describe("HelloWorld.vue", () => {
	it("renders props.msg when passed", () => {
		const msg = "new message";
		const wrapper = shallowMount(HelloWorld, {
			propsData: { msg }
		});
		expect(wrapper.text()).toMatch(msg);
	});
});
