import PillNav from "@/components/PillNav";

export default function HomeNav() {
  return (
    <div className="w-screen flex justify-center fixed top-0 left-0 z-100">
      <PillNav
        logo="/globe.svg"
        logoAlt="Company Logo"
        items={[
          { label: "Skills", href: "#skills" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" }
        ]}
        activeHref="#main"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        initialLoadAnimation={true}
      />
    </div>
  );
}
