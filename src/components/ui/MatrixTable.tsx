import Link from 'next/link';

interface MatrixRow {
  proceso: string;
  tecnologia: string;
  marca: string;
  servicio: string;
  servicioLink: string;
}

interface MatrixTableProps {
  heading?: string;
  rows: MatrixRow[];
  headers: {
    proceso: string;
    tecnologia: string;
    marca: string;
    servicio: string;
  };
  className?: string;
}

export default function MatrixTable({ heading, rows, headers, className = '' }: MatrixTableProps) {
  return (
    <div className={className}>
      {heading && (
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">{heading}</h3>
      )}
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-navy">
              <th className="py-3 pr-4 font-heading text-sm font-bold text-navy uppercase tracking-wide">
                {headers.proceso}
              </th>
              <th className="py-3 pr-4 font-heading text-sm font-bold text-navy uppercase tracking-wide">
                {headers.tecnologia}
              </th>
              <th className="py-3 pr-4 font-heading text-sm font-bold text-navy uppercase tracking-wide">
                {headers.marca}
              </th>
              <th className="py-3 font-heading text-sm font-bold text-navy uppercase tracking-wide">
                {headers.servicio}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-gray-200 last:border-0">
                <td className="py-4 pr-4 text-gray-900 font-medium">{row.proceso}</td>
                <td className="py-4 pr-4 text-gray-700">{row.tecnologia}</td>
                <td className="py-4 pr-4 text-gray-700">{row.marca}</td>
                <td className="py-4">
                  <Link
                    href={row.servicioLink}
                    className="text-gold font-semibold hover:text-gold-dark transition-colors"
                  >
                    {row.servicio}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="flex flex-col gap-4 md:hidden">
        {rows.map((row, i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
            <h4 className="font-heading font-semibold text-gray-900">{row.proceso}</h4>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex gap-2">
                <dt className="font-medium text-gray-500">{headers.tecnologia}:</dt>
                <dd className="text-gray-700">{row.tecnologia}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-gray-500">{headers.marca}:</dt>
                <dd className="text-gray-700">{row.marca}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-gray-500">{headers.servicio}:</dt>
                <dd>
                  <Link
                    href={row.servicioLink}
                    className="text-gold font-semibold hover:text-gold-dark transition-colors"
                  >
                    {row.servicio}
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
