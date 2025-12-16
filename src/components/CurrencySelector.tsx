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

export default function CurrencySelector() {
  const { selectedCountry, setSelectedCountry } = useCurrency();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-flex items-center gap-1">
            <span>{selectedCountry.flag}</span>
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
                    <span>{country.flag}</span>
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
