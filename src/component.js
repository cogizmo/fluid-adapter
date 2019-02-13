"use strict";
(function defineElement() {
// -----------------------------------------------------------------------------
//  ELEMENT DEFINITION
// -----------------------------------------------------------------------------
    const _PROPERTIES_ = new WeakMap();
    class FluidAdapterElement extends Cogizmo {
        static get is() { return 'fluid-adapter'; }

    //  ELEMENT LIFE CYCLE FUNCTIONS
    // -------------------------------------------------------------------------
        constructor() {
            super()

            let priv =  Object.create(null);

            _PROPERTIES_.set(this, priv);
        }

        connectedCallback() {
            super.connectedCallback();
        }

        disconnectedCallback() {
            super.connectedCallback();
        }

    //  HTML ATTRIBUTES
    // -------------------------------------------------------------------------
        static get observedAttributes() {
            // List attributes here.
            let attrs = [

            ];

            // Get superclasses observed attributes
            let a = [];
            if (!!super.observedAttributes
            &&  super.observedAttributes instanceof Array)
                a = super.observedAttributes;
            // Merge arrays without duplicates
            return a.concat(attrs.filter(item => a.indexOf(item) < 0));
        }

        attributeChangedCallback(name, old, value) {
        // Maintain native behavior and (if applicable) enhancements
            if ("function" === typeof super.attributeChangedCallback)
                super.attributeChangedCallback(name, old, value);
        }
    };

    if ("function" === typeof FluidAdapterElement.manage)
        FluidAdapterElement.manage();
    else customElements.define(FluidAdapterElement.is, FluidAdapterElement);
}) ();
