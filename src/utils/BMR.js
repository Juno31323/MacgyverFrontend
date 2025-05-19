export function calculateBMR(gender, height, weight, age) {
   const h = parseFloat(height);
   const w = parseFloat(weight);
   const a = parseFloat(age);
 
   if (!h || !w || !a) return null;
 
   if (gender === 'male') {
     return (66.47 + 13.75 * w + 5.003 * h - 6.755 * a).toFixed(1);
   } else {
     return (655.1 + 9.563 * w + 1.850 * h - 4.676 * a).toFixed(1);
   }
 }