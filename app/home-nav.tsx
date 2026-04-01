import PillNav from "@/components/PillNav";

export default function HomeNav() {
  return (
    <div className="w-screen flex justify-center">
      <PillNav
        logo="/globe.svg"
        logoAlt="Company Logo"
        items={[
          { label: "Home", href: "#main" },
          { label: "About", href: "#about" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" }
        ]}
        activeHref="#main"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        initialLoadAnimation={false}
      />
    </div>
  );
}
