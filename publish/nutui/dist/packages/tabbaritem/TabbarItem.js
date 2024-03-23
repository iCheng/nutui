import { c as createComponent } from "../component-DQf3CENX.js";
import { r as renderIcon } from "../renderIcon-BfOvhG7i.js";
import { inject, reactive, getCurrentInstance, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createVNode, normalizeProps, guardReactiveProps, withCtx, createElementVNode, renderSlot, createCommentVNode, createBlock, resolveDynamicComponent, toDisplayString } from "vue";
import { u as useRouter } from "../index-aiGQ-EiA.js";
import NutBadge from "../badge/Badge.js";
import { T as TABBAR_KEY } from "../types-MuhxzCWc.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("tabbar-item");
const _sfc_main = create({
  components: { NutBadge },
  props: {
    tabTitle: {
      // 标签页的标题
      type: String,
      default: ""
    },
    name: {
      type: String
    },
    icon: {
      // 标签页显示的icon
      type: Object
    },
    href: {
      // 标签页的跳转链接
      type: String,
      default: ""
    },
    to: [Object, String]
  },
  setup(props, { slots }) {
    const isHaveSlot = (slot) => {
      return slots[slot];
    };
    const parent = inject(TABBAR_KEY);
    const state = reactive({
      unactiveColor: parent.unactiveColor,
      // 未选中的颜色
      activeColor: parent.activeColor,
      // 选中的颜色
      index: 0
    });
    const router = useRouter();
    const relation = (child) => {
      var _a;
      if (child.proxy) {
        parent.children.push(child.proxy);
        const index2 = parent.children.indexOf(child.proxy);
        state.index = (_a = props.name) != null ? _a : index2;
      }
    };
    relation(getCurrentInstance());
    const active = computed(() => state.index === parent.modelValue);
    function change() {
      var _a, _b, _c;
      let key = (_a = props.name) != null ? _a : state.index;
      let indexValue = null;
      if (props.name) {
        indexValue = parent.children.findIndex((item) => {
          return item.name == key;
        });
      }
      parent.changeIndex(indexValue != null ? indexValue : key, state.index);
      let index2 = indexValue != null ? indexValue : key;
      if ((_b = parent.children[index2]) == null ? void 0 : _b.href) {
        window.location.href = parent.children[index2].href;
        return;
      }
      if ((_c = parent.children[index2]) == null ? void 0 : _c.to) {
        let to = parent.children[index2].to;
        if (to && router) {
          router.push(to);
        } else {
          location.replace(to);
        }
      }
    }
    return {
      state,
      active,
      renderIcon,
      isHaveSlot,
      change
    };
  }
});
const _hoisted_1 = { class: "nut-tabbar-item_icon-box" };
const _hoisted_2 = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
};
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_badge = resolveComponent("nut-badge");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !_ctx.active }]),
    style: normalizeStyle({
      color: _ctx.active ? _ctx.state.activeColor : _ctx.state.unactiveColor
    }),
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.change())
  }, [
    createVNode(_component_nut_badge, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
      default: withCtx(() => [
        createElementVNode("view", _hoisted_1, [
          _ctx.isHaveSlot("icon") ? (openBlock(), createElementBlock("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "icon", { active: _ctx.active })
          ])) : createCommentVNode("", true),
          _ctx.icon && !_ctx.isHaveSlot("icon") ? (openBlock(), createElementBlock("view", _hoisted_3, [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderIcon(_ctx.icon)), { class: "nut-popover-item-img" }))
          ])) : createCommentVNode("", true),
          createElementVNode("view", {
            class: normalizeClass([
              "nut-tabbar-item_icon-box_nav-word",
              { "nut-tabbar-item_icon-box_big-word": !_ctx.icon && !_ctx.isHaveSlot("icon") }
            ])
          }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              _ctx.tabTitle ? (openBlock(), createElementBlock("view", _hoisted_4, toDisplayString(_ctx.tabTitle), 1)) : createCommentVNode("", true)
            ])
          ], 2)
        ])
      ]),
      _: 3
    }, 16)
  ], 6);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};