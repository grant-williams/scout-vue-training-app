import { mount } from "@vue/test-utils";
import Dashboard from "@/views/Dashboard.vue";

describe("Dashboard.vue", () => {
	it("renders Dashboard header", () => {
		const wrapper = mount(Dashboard);
		expect(wrapper.contains("h1")).toBe(true);
	});
});
