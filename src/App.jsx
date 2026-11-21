import React, { useState, useMemo } from 'react';
import {
  Globe,
  ShieldCheck,
  Package,
  Truck,
  Search,
  CheckCircle2,
  ArrowRight,
  FileText,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Layers,
  Award,
  Send,
  X,
  SlidersHorizontal,
  Building2,
  Leaf
} from 'lucide-react';
import { PRODUCTS, CATALOG_CATEGORIES } from './data/products';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rfqOpen, setRfqOpen] = useState(false);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [rfqForm, setRfqForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    country: '',
    productInterest: '',
    quantity: '1,000 PCS',
    incoterm: 'FOB Chattogram',
    customNotes: ''
  });

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All Products' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.hsCode.toLowerCase().includes(q) ||
        item.material.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openRfqWithProduct = (product = null) => {
    setRfqSubmitted(false);
    setRfqForm((prev) => ({
      ...prev,
      productInterest: product ? `[${product.code}] ${product.name} (HS: ${product.hsCode})` : prev.productInterest,
      quantity: product ? product.moq : prev.quantity
    }));
    setRfqOpen(true);
  };

  const handleRfqSubmit = (e) => {
    e.preventDefault();
    setRfqSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Compliance & Trade Corridor Bar */}
      <div className="bg-emerald-950/80 border-b border-emerald-800/40 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-emerald-200/90">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified B2B Exporter &amp; Importer
            </span>
            <span className="hidden sm:inline text-emerald-700">|</span>
            <span className="hidden sm:inline font-mono text-[11px]">
              ERC / IRC / BIN Compliant • L/C &amp; T/T Settlement
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>DHAKA • CHATTOGRAM • SINGAPORE • TOKYO</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-950">
              <Leaf className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-lg text-white">
                NGREEN<span className="text-emerald-400">.GLOBAL</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-400 -mt-1">
                Golden Fiber &amp; Global Trade
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#catalog" className="hover:text-emerald-400 transition-colors">
              Product Catalog ({PRODUCTS.length})
            </a>
            <a href="#customization" className="hover:text-emerald-400 transition-colors">
              OEM &amp; Custom Specs
            </a>
            <a href="#compliance" className="hover:text-emerald-400 transition-colors">
              Trade Compliance
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openRfqWithProduct(null)}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm px-4 py-2 rounded-lg transition-all shadow-md shadow-emerald-950/50"
            >
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                The New Chapter of Golden Fiber • Direct Manufacturer &amp; Merchant Sourcing
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Sustainable Jute Goods, Apparel &amp; Industrial Trade{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Built for Global Supply Chains
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                From laminated eco-friendly shopping bags, braided home decor, and heavy-duty hessian sacking to export-grade readymade garments and industrial hardware—we deliver custom-manufactured orders worldwide with full bank L/C and CFR/FOB compliance.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#catalog"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  Explore Full Catalog
                  <Package className="w-4 h-4" />
                </a>
                <button
                  onClick={() => openRfqWithProduct(null)}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-medium px-6 py-3 rounded-lg transition-all"
                >
                  Submit Custom Sample / Spec
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-xl">
                <div>
                  <div className="text-2xl font-bold text-white font-mono">48+</div>
                  <div className="text-xs text-slate-400">Catalog SKUs Ready</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400 font-mono">100%</div>
                  <div className="text-xs text-slate-400">Custom Color &amp; Size OEM</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white font-mono">FOB / CFR</div>
                  <div className="text-xs text-slate-400">Chattogram &amp; Global Ports</div>
                </div>
              </div>
            </div>

            {/* Right Trade Highlight Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase text-emerald-400">
                      Featured Sourcing Division
                    </span>
                    <h2 className="text-lg font-bold text-white mt-0.5">
                      Tizarah Fibre &amp; NGreen Catalog
                    </h2>
                  </div>
                  <Award className="w-8 h-8 text-emerald-400" />
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <Layers className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Diversified Jute Line (Codes 001–044)</div>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Shopping bags, laptop &amp; office bags, wine bags, braided floor mats, curtains, cushion covers &amp; jute-cotton apparel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <Package className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Traditional Hessian &amp; Sacking (043–046)</div>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Export-grade hessian cloth, hydrocarbon-free agro bags, and B-Twill/A-Twill heavy sacking rolls &amp; bags.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <Truck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">RMG Apparel &amp; Industrial Hardware</div>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Combed cotton polos, denim, joggers, and Taiwan/Japan origin self-drilling fasteners.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => openRfqWithProduct(null)}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  Request Wholesale Price List &amp; MOQ Sheet
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Interactive Product Catalog Section */}
      <section id="catalog" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Complete Export &amp; Import Inventory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Product Catalog
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Filter by division or search by product name, catalog code (001–046), or HS Code.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search code (e.g. 001), name, HS..."
              className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          <SlidersHorizontal className="w-4 h-4 text-slate-500 shrink-0 mr-1" />
          {CATALOG_CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                  active
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-semibold'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        <div className="text-xs text-slate-400 mb-4 font-mono">
          Showing {filteredProducts.length} of {PRODUCTS.length} catalog specifications
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center">
            <p className="text-slate-300 font-medium">No products matched your current filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Products');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-emerald-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-xl p-5 flex flex-col justify-between transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      CODE: {product.code}
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">
                      HS {product.hsCode}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {product.material}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Category:</span>
                      <span className="text-slate-300 font-medium text-right">{product.subCategory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Indicative MOQ:</span>
                      <span className="text-emerald-400 font-mono">{product.moq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Origin:</span>
                      <span className="text-slate-300">{product.origin}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                  >
                    Specs
                  </button>
                  <button
                    onClick={() => openRfqWithProduct(product)}
                    className="flex-1 py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* OEM & Custom Sample Banner (Directly from Catalog Page 16) */}
      <section id="customization" className="py-14 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950/90 via-slate-900 to-slate-900 border border-emerald-700/30 rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase">
                <CheckCircle2 className="w-4 h-4" />
                Bespoke Manufacturing &amp; Private Label OEM
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Custom Colors, Sizes &amp; Buyer-Sample Production
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Any color, dimension, GSM, lamination type, or custom logo branding is available across our entire jute and apparel catalog. We welcome inquiries for bespoke eco-friendly goods manufactured strictly according to importer specifications and physical samples.
              </p>
            </div>
            <div className="shrink-0">
              <button
                onClick={() => openRfqWithProduct(null)}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg"
              >
                Send Custom Specification
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Compliance & Export Documentation */}
      <section id="compliance" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase text-emerald-400">
            Institutional Reliability
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Export Documentation &amp; Banking Compliance
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-3">
            <FileText className="w-7 h-7 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Full Trade Documentation</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Every shipment includes verified Proforma Invoice, Commercial Invoice, Detailed Packing List (CBM/Net/Gross Weight), Bill of Lading, and Chamber Certificate of Origin.
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-3">
            <Building2 className="w-7 h-7 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Flexible Bank Settlements</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transactions executed via Irrevocable Letter of Credit (L/C at Sight) or Telegraphic Transfer (T/T) through scheduled international banking channels in Dhaka.
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-3">
            <Globe className="w-7 h-7 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Seaworthy &amp; Air Logistics</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              ISPM-15 palletized and hydraulic-baled export packaging shipped under FOB Chattogram, CFR, or CIF Incoterms 2020 to Asia, Europe, Middle East, and North America.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="mt-auto bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <Leaf className="w-5 h-5 text-emerald-400" />
              <span className="font-extrabold text-lg text-white">NGREEN.GLOBAL</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Global B2B sourcing and export partner for diversified golden-fiber jute products, traditional hessian &amp; sacking, readymade garments, and industrial hardware.
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="font-bold text-white uppercase tracking-wider mb-3">Corporate Office</div>
            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>2/C Sawon Tower, Suite-C1, Purana Paltan, Dhaka-1000, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>tizarahfibrebd@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+880 1710-911417</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider">Quick RFQ</div>
            <p className="text-xs text-slate-400">
              Need an immediate FOB/CFR quotation for container or LCL orders?
            </p>
            <button
              onClick={() => openRfqWithProduct(null)}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors"
            >
              Open RFQ Desk
            </button>
          </div>
        </div>
        <div className="border-t border-slate-800/80 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} NGreen Global &amp; Tizarah Fibre Industries Pvt. Ltd. All rights reserved.
        </div>
      </footer>

      {/* Product Specification Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-xs text-emerald-400">
                  CATALOG CODE: {selectedProduct.code} • HS {selectedProduct.hsCode}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedProduct.name}</h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-sm bg-slate-950/70 p-4 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-500 text-xs block">Material &amp; Construction</span>
                <span className="text-slate-200 font-medium">{selectedProduct.material}</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs block">Customization &amp; OEM Options</span>
                <span className="text-slate-200">{selectedProduct.customization}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                <div>
                  <span className="text-slate-500 text-xs block">Indicative MOQ</span>
                  <span className="text-emerald-400 font-mono font-semibold">{selectedProduct.moq}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs block">Delivery Terms</span>
                  <span className="text-slate-200 font-mono">{selectedProduct.terms}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const p = selectedProduct;
                  setSelectedProduct(null);
                  openRfqWithProduct(p);
                }}
                className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm"
              >
                Request Quote for {selectedProduct.code}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RFQ Modal */}
      {rfqOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl my-8">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase">B2B Export Desk</span>
                <h3 className="text-xl font-bold text-white mt-0.5">Request for Quotation (RFQ)</h3>
              </div>
              <button
                onClick={() => setRfqOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {rfqSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">RFQ Logged Successfully</h4>
                <p className="text-sm text-slate-300">
                  Thank you, <span className="font-semibold">{rfqForm.contactPerson || 'Partner'}</span>. Our export desk will prepare a Proforma quotation for{' '}
                  <span className="text-emerald-400">{rfqForm.productInterest || 'your inquiry'}</span> within 24 business hours.
                </p>
                <a
                  href={`mailto:tizarahfibrebd@gmail.com?subject=${encodeURIComponent(
                    `B2B RFQ: ${rfqForm.productInterest || 'Product Inquiry'} - ${rfqForm.companyName}`
                  )}&body=${encodeURIComponent(
                    `Company: ${rfqForm.companyName}\nContact: ${rfqForm.contactPerson}\nCountry: ${rfqForm.country}\nProduct: ${rfqForm.productInterest}\nQuantity: ${rfqForm.quantity}\nIncoterms: ${rfqForm.incoterm}\nNotes: ${rfqForm.customNotes}`
                  )}`}
                  className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-lg"
                >
                  <Mail className="w-4 h-4" />
                  Also Send via Email Client
                </a>
              </div>
            ) : (
              <form onSubmit={handleRfqSubmit} className="space-y-3.5 text-sm">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Company Name *</label>
                    <input
                      required
                      type="text"
                      value={rfqForm.companyName}
                      onChange={(e) => setRfqForm({ ...rfqForm, companyName: e.target.value })}
                      placeholder="e.g. Vriksha Impex Pte Ltd"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Contact Person *</label>
                    <input
                      required
                      type="text"
                      value={rfqForm.contactPerson}
                      onChange={(e) => setRfqForm({ ...rfqForm, contactPerson: e.target.value })}
                      placeholder="Full Name"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Corporate Email *</label>
                    <input
                      required
                      type="email"
                      value={rfqForm.email}
                      onChange={(e) => setRfqForm({ ...rfqForm, email: e.target.value })}
                      placeholder="buyer@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Destination Country / Port *</label>
                    <input
                      required
                      type="text"
                      value={rfqForm.country}
                      onChange={(e) => setRfqForm({ ...rfqForm, country: e.target.value })}
                      placeholder="e.g. Singapore / Rotterdam"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Product Code / Item Name *</label>
                  <input
                    required
                    type="text"
                    value={rfqForm.productInterest}
                    onChange={(e) => setRfqForm({ ...rfqForm, productInterest: e.target.value })}
                    placeholder="e.g. [001] Jute Shopping Bag or Custom Sample"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Target Order Quantity</label>
                    <input
                      type="text"
                      value={rfqForm.quantity}
                      onChange={(e) => setRfqForm({ ...rfqForm, quantity: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Preferred Incoterms</label>
                    <select
                      value={rfqForm.incoterm}
                      onChange={(e) => setRfqForm({ ...rfqForm, incoterm: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:border-emerald-500"
                    >
                      <option value="FOB Chattogram">FOB Chattogram</option>
                      <option value="CFR Destination Port">CFR Destination Port</option>
                      <option value="CIF Destination Port">CIF Destination Port</option>
                      <option value="EXW Dhaka">EXW Dhaka</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Custom Size, Color, GSM or Logo Notes</label>
                  <textarea
                    rows={3}
                    value={rfqForm.customNotes}
                    onChange={(e) => setRfqForm({ ...rfqForm, customNotes: e.target.value })}
                    placeholder="Specify lamination, custom dimensions, GSM, or sample requirements..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors"
                >
                  Submit Quotation Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
