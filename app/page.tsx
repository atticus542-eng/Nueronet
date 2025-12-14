export default function Dashboard() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">
        NeuroNest Dashboard
      </h1>

      <div className="grid gap-4">
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-medium">Recommended for You</h2>
          <p className="text-sm text-gray-600">
            Personalized guidance based on your child’s needs
          </p>
        </section>

        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-medium">Community Highlights</h2>
          <p className="text-sm text-gray-600">
            Support from parents who understand
          </p>
        </section>
      </div>
    </main>
  )
}
