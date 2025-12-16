import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCurrency, countries } from '@/contexts/CurrencyContext';

const flagUrls: Record<string, string> = {
  US: 'https://flagcdn.com/us.svg',
  GB: 'https://flagcdn.com/gb.svg',
  EU: 'https://flagcdn.com/eu.svg',
  CA: 'https://flagcdn.com/ca.svg',
  AU: 'https://flagcdn.com/au.svg',
  JP: 'https://flagcdn.com/jp.svg',
  IN: 'https://flagcdn.com/in.svg',
  CN: 'https://flagcdn.com/cn.svg',
  BR: 'https://flagcdn.com/br.svg',
  MX: 'https://flagcdn.com/mx.svg',
};

function CountryFlag({ code, name }: { code: string; name: string }) {
  const src = flagUrls[code];

  if (!src) {
    return (
      <span className="inline-flex h-4 items-center justify-center rounded-sm border px-1 text-[0.6rem] uppercase">
        {code}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="h-4 w-6 rounded-sm object-cover border border-border"
      loading="lazy"
    />
  );
}

export default function CurrencySelector() {
  const { selectedCountry, setSelectedCountry } = useCurrency();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-flex items-center gap-2">
            <CountryFlag code={selectedCountry.code} name={selectedCountry.name} />
            <span>{selectedCountry.currency}</span>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-popover z-50">
        <DropdownMenuLabel>Select Country & Currency</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-[300px] overflow-y-auto">
          {countries.map((country) => (
            <DropdownMenuItem
              key={country.code}
              onClick={() => setSelectedCountry(country)}
              className={`cursor-pointer ${
                selectedCountry.code === country.code ? 'bg-accent' : ''
              }`}
            >
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 font-medium">
                    <CountryFlag code={country.code} name={country.name} />
                    <span>{country.name}</span>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {country.currencySymbol}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{country.currency}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
