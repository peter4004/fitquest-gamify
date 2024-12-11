import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8 md:ml-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;