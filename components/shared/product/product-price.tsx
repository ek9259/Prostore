import { cn } from "@/lib/utils";

const ProductPrice = ({ value, className }: { value: number; className?: string }) => {
    // Ensure two decimal places 
    // Convert value to a number if it's a string
    const numericValue = typeof value === 'number' ? value : Number(value);

    // Check if the conversion was successful
    if (isNaN(numericValue)) {
        console.error('Invalid number provided for price:', value);
        return null; // or some fallback UI
    }

    // Ensure two decimal places
    const stringValue = numericValue.toFixed(2);

    // Get the int/float
    const [intValue, floatValue] = stringValue.split('.');

    return (<p className={cn("text-2xl", className)}>
        <span className="text-xs align-super">$</span>
        {intValue}
        <span className="text-xs align-super">.{floatValue}</span>
    </p>)
}

export default ProductPrice;