const A = "Algebra", N = "Number Theory", G = "Geometry", C = "Combinatorics";

// [chapter, subtopic, level, source, problem, solution]
const rows = [
/* ---------------- GEOMETRY ---------------- */
[G,"Coordinates","Easy","RMO 2013, Paper 1, Q5",
`Let ABC be a triangle with ∠A = 90° and AB = AC. Let D and E be points on the segment BC such that BD : DE : EC = 3 : 5 : 4. Prove that ∠DAE = 45°.`,
`BIG IDEA: Put the triangle on coordinates, find D and E by dividing BC into 12 equal parts, and compute the angle with a dot product.

Step 1 - Coordinates. Scale so that AB = AC = 1. Put A = (0, 0), B = (1, 0), C = (0, 1).

Step 2 - Find D and E. BD : DE : EC = 3 : 5 : 4 means BC is cut into 12 equal parts, with D after 3 parts and E after 3 + 5 = 8 parts (counting from B).
D = B + (3/12)(C − B) = (3/4, 1/4).
E = B + (8/12)(C − B) = (1/3, 2/3).

Step 3 - The angle at A. The vectors are AD = (3/4, 1/4) and AE = (1/3, 2/3).
AD · AE = 3/12 + 2/12 = 5/12.
|AD| = √(9/16 + 1/16) = √10/4 and |AE| = √(1/9 + 4/9) = √5/3, so |AD||AE| = √50/12 = 5√2/12.
cos ∠DAE = (5/12) / (5√2/12) = 1/√2.

So ∠DAE = 45°. ∎`],

[G,"Tangent-chord angle","Medium","RMO 2016, Paper 3, Q1",
`Let ABC be a triangle and D be the mid-point of BC. Suppose the angle bisector of ∠ADC is tangent to the circumcircle of triangle ABD at D. Prove that ∠A = 90°.`,
`BIG IDEA: Use the tangent-chord angle to show DA = DB. Since D is the midpoint of BC, D is then the centre of a circle through A, B, C, so BC is a diameter.

Step 1 - Name the angle. Let ∠ADC = 2θ. The bisector of ∠ADC makes angle θ with DA, and this bisector is the tangent at D to the circle ABD.

Step 2 - Tangent-chord angle. The angle between a tangent and a chord equals the inscribed angle in the opposite segment. Here the chord is DA, the tangent makes angle θ with it on C's side, and B lies on the other side of line DA (D is between B and C). So ∠ABD = θ.

Step 3 - Exterior angle. ∠ADC is an exterior angle of triangle ABD at D, so ∠ADC = ∠ABD + ∠BAD. That is 2θ = θ + ∠BAD, so ∠BAD = θ = ∠ABD.

Step 4 - Isosceles. In triangle ABD two angles are equal, so DA = DB.

Step 5 - Finish. D is the midpoint of BC, so DB = DC. Hence DA = DB = DC. The circle with centre D and radius DB passes through A, B and C, and BC is its diameter. So ∠BAC = 90°. ∎`],

/* ---------------- ALGEBRA ---------------- */
[A,"Polynomials and Vieta","Hard","RMO 2013, Paper 1, Q2",
`Let f(x) = x³ + ax² + bx + c and g(x) = x³ + bx² + cx + a, where a, b, c are integers with c ≠ 0. Suppose that: (a) f(1) = 0; (b) the roots of g(x) = 0 are the squares of the roots of f(x) = 0. Find the value of a²⁰¹³ + b²⁰¹³ + c²⁰¹³.`,
`BIG IDEA: Write Vieta's formulas for both cubics. They give a = −c² and b = a²; combined with f(1) = 0, c must divide 1.

Step 1 - Vieta for f. Let the roots of f be r, s, t. Then r + s + t = −a, rs + st + tr = b, rst = −c.

Step 2 - Vieta for g, whose roots are r², s², t².
Sum of roots: r² + s² + t² = −b.
Pair sums: r²s² + s²t² + t²r² = c.
Product: (rst)² = −a.

Step 3 - Translate.
From the product: c² = −a, so a = −c².
From the sum: r² + s² + t² = (r + s + t)² − 2(rs + st + tr) = a² − 2b, so a² − 2b = −b, giving b = a².
From the pair sums: (rs + st + tr)² − 2rst(r + s + t) = b² − 2(−c)(−a) = b² − 2ac, so b² − 2ac = c.

Step 4 - Use f(1) = 0. 1 + a + b + c = 0. Substituting a = −c² and b = a² = c⁴ gives 1 − c² + c⁴ + c = 0, i.e. c(c³ − c + 1) = −1.
So c divides 1: c = 1 or c = −1. For c = 1 the left side is 2, which is not 0. For c = −1 it is 1 − 1 + 1 − 1 = 0. ✓

Step 5 - The values. c = −1, a = −c² = −1, b = a² = 1. Check the last relation: b² − 2ac = 1 − 2(−1)(−1) = −1 = c ✓.

Step 6 - The answer. a²⁰¹³ + b²⁰¹³ + c²⁰¹³ = (−1) + 1 + (−1) = −1.`],

[A,"Inequalities","Easy","RMO 2013, Paper 2, Q5",
`Let n ≥ 3 be a natural number and let P be a polygon with n sides. Let a₁, a₂, …, aₙ be the lengths of the sides of P and let p be its perimeter. Prove that
a₁/(p − a₁) + a₂/(p − a₂) + ⋯ + aₙ/(p − aₙ) < 2.`,
`BIG IDEA: In any polygon, one side is shorter than the sum of the others. This shows every denominator p − aᵢ is more than p/2.

Step 1 - Polygon inequality. In a polygon each side is shorter than the sum of the remaining sides: aᵢ < p − aᵢ. Adding aᵢ to both sides, 2aᵢ < p.

Step 2 - Bound the denominator. From p − aᵢ > aᵢ we also get p = aᵢ + (p − aᵢ) < 2(p − aᵢ), so p − aᵢ > p/2.

Step 3 - Bound each term. Because p − aᵢ > p/2, we have aᵢ/(p − aᵢ) < aᵢ/(p/2) = 2aᵢ/p.

Step 4 - Add. The sum is less than 2(a₁ + a₂ + ⋯ + aₙ)/p = 2p/p = 2. ∎`],

[A,"Inequalities","Easy","RMO 2016, Paper 1, Q2",
`Let a, b, c be positive real numbers such that a/(1 + a) + b/(1 + b) + c/(1 + c) = 1. Prove that abc ≤ 1/8.`,
`BIG IDEA: Let x = a/(1 + a), y = b/(1 + b), z = c/(1 + c). Then x + y + z = 1, and each of a, b, c is a ratio of these. AM-GM finishes it.

Step 1 - Substitute. x = a/(1 + a) means 1 − x = 1/(1 + a), so a = x/(1 − x). Likewise b = y/(1 − y) and c = z/(1 − z). Since x + y + z = 1, we have 1 − x = y + z, 1 − y = z + x, 1 − z = x + y.

Step 2 - Rewrite the product.
abc = xyz / ((y + z)(z + x)(x + y)).

Step 3 - AM-GM on each bracket. y + z ≥ 2√(yz), z + x ≥ 2√(zx), x + y ≥ 2√(xy). Multiplying, (y + z)(z + x)(x + y) ≥ 8√(yz·zx·xy) = 8xyz.

Step 4 - Conclude. abc ≤ xyz/(8xyz) = 1/8. ∎ (Equality when x = y = z = 1/3, i.e. a = b = c = 1/2.)`],

/* ---------------- NUMBER THEORY ---------------- */
[N,"Primes and divisibility","Medium","RMO 2013, Paper 1, Q3",
`Find all primes p and q such that p divides q² − 4 and q divides p² − 1.`,
`BIG IDEA: Factor both expressions. Because p and q are prime, each must divide one of the two factors. Then size arguments kill almost every case.

Step 1 - Factor. p | (q − 2)(q + 2), so p | q − 2 or p | q + 2. Also q | (p − 1)(p + 1), so q | p − 1 or q | p + 1.

Step 2 - The case q = 2. Then q² − 4 = 0, which every p divides. And q | p² − 1 means p² − 1 is even, i.e. p is odd. So (p, 2) works for every odd prime p. (p = 2 fails: 2 does not divide 3.)

Step 3 - The case q odd (q ≥ 3). Then q² − 4 is odd, so p is odd, and p ≥ 3.
(a) Suppose p | q − 2. Then p ≤ q − 2 < q. Now q | p − 1 is impossible (0 < p − 1 < q). So q | p + 1, forcing q ≤ p + 1, hence q = p + 1. But two odd primes cannot differ by 1. Impossible.
(b) So p | q + 2. Since q + 2 is odd, either p = q + 2 or p is a proper divisor of q + 2, in which case p ≤ (q + 2)/3. In the second case, q | p − 1 or q | p + 1 gives q ≤ p + 1 ≤ (q + 2)/3 + 1, i.e. 3q ≤ q + 5, so q ≤ 2. Contradiction.
(c) So p = q + 2. Then q | p² − 1 = (q + 2)² − 1 = q² + 4q + 3, so q | 3 and q = 3, p = 5.
Check: 5 | 9 − 4 = 5 ✓ and 3 | 25 − 1 = 24 ✓.

Answer: (p, q) = (5, 3), together with (p, 2) for every odd prime p.`],

[N,"Divisibility and parity","Hard","RMO 2013, Paper 1, Q6",
`Suppose that m and n are integers such that both the quadratic equations x² + mx − n = 0 and x² − mx + n = 0 have integer roots. Prove that n is divisible by 6.`,
`BIG IDEA: Prove separately that n is divisible by 3 (using the discriminants and squares mod 3) and that n is even (using the roots mod 4).

Setup. Let the integer roots of x² + mx − n = 0 be a, b and those of x² − mx + n = 0 be c, d. By Vieta: a + b = −m, ab = −n, c + d = m, cd = n. So a + b + c + d = 0 and ab = −cd.

Part 1 - 3 divides n. The discriminants are perfect squares: (a − b)² = m² + 4n =: u² and (c − d)² = m² − 4n =: v². Adding and subtracting: u² + v² = 2m² and u² − v² = 8n. Squares are 0 or 1 mod 3.
- If 3 ∤ m, then 2m² ≡ 2 (mod 3), so u² ≡ v² ≡ 1 (mod 3).
- If 3 | m, then u² + v² ≡ 0, so u² ≡ v² ≡ 0 (mod 3).
Either way u² ≡ v² (mod 3), so 3 | 8n and therefore 3 | n.

Part 2 - n is even. Suppose n is odd. Then ab = −n and cd = n are odd, so a, b, c, d are all odd. Each odd number is ≡ 1 or 3 (mod 4). Let k of them be ≡ 3 (mod 4). Then a + b + c + d ≡ (4 − k) + 3k = 4 + 2k (mod 4). Since the sum is 0, k is even, so abcd ≡ 1 (mod 4) (each factor ≡ 3 contributes −1, an even number of times).
But abcd = (ab)(cd) = (−n)(n) = −n², and for odd n, n² ≡ 1 (mod 4), so abcd ≡ −1 (mod 4). Contradiction. So n is even.

Conclusion. 2 | n and 3 | n, so 6 | n. ∎`],

[N,"Digit sums","Medium","RMO 2016, Paper 1, Q3",
`For any natural number n, expressed in base 10, let S(n) denote the sum of all digits of n. Find all natural numbers n such that n = 2·S(n)².`,
`BIG IDEA: Write S = S(n). Mod 9 restricts S to a few residues, and a size argument bounds n. Then only a handful of cases remain.

Step 1 - Mod 9. A number is congruent to its digit sum mod 9, so n ≡ S (mod 9). Since n = 2S², we need 2S² ≡ S, i.e. S(2S − 1) ≡ 0 (mod 9). The numbers S and 2S − 1 have no common prime factor (any common factor divides 2S − (2S − 1) = 1), so 9 divides S or 9 divides 2S − 1. In the second case 2S ≡ 1, so S ≡ 5 (mod 9). Hence S ≡ 0 or 5 (mod 9).

Step 2 - Bound n. If n has d digits, then S ≤ 9d and n ≥ 10^(d−1). So 10^(d−1) ≤ 2·(9d)² = 162d², which fails for d ≥ 5 (for d = 5: 10000 > 4050). So n has at most 4 digits, S ≤ 36, and n = 2S² ≤ 2592.

Step 3 - Test. The allowed S values (≡ 0 or 5 mod 9, up to 36) are 5, 9, 14, 18, 23, 27, 32, 36. Compute n = 2S² and its digit sum:
S = 5: n = 50, digit sum 5 ✓
S = 9: n = 162, digit sum 9 ✓
S = 14: n = 392, digit sum 14 ✓
S = 18: n = 648, digit sum 18 ✓
S = 23: n = 1058, digit sum 14 ✗
S = 27: n = 1458, digit sum 18 ✗
S = 32: n = 2048, digit sum 14 ✗
S = 36: n = 2592, digit sum 18 ✗

Answer: n = 50, 162, 392, 648.`],

/* ---------------- COMBINATORICS ---------------- */
[C,"Counting with digits","Easy","RMO 2016, Paper 1, Q4",
`Find the number of all 6-digit natural numbers having exactly three odd digits and three even digits.`,
`BIG IDEA: First ignore the rule that a 6-digit number cannot start with 0. Count everything, then subtract the strings that start with 0.

Step 1 - Allow a leading 0. Choose which 3 of the 6 positions hold odd digits: C(6, 3) = 20 ways. Each odd position has 5 choices (1, 3, 5, 7, 9) and each even position has 5 choices (0, 2, 4, 6, 8). Total: 20 · 5⁶ = 20 · 15625 = 312500.

Step 2 - Remove strings starting with 0. If the first digit is 0 (an even digit), the other 5 positions must contain 2 even digits and 3 odd digits. Choose the 2 even positions: C(5, 2) = 10. Then 5⁵ = 3125 digit choices. That is 10 · 3125 = 31250 strings.

Step 3 - Subtract. 312500 − 31250 = 281250.

Answer: 281250.`],

[C,"Counting on a circle","Medium","RMO 2015, Paper 1, Q4",
`Suppose 28 objects are placed along a circle at equal distances. In how many ways can 3 objects be chosen from among them so that no two of the three chosen objects are adjacent nor diametrically opposite?`,
`BIG IDEA: Count all triples, subtract those with an adjacent pair, then subtract those with a diametrically opposite pair (these two bad types never overlap in the way we count).

Step 1 - All triples. C(28, 3) = 3276.

Step 2 - Triples with at least one adjacent pair. There are 28 adjacent pairs. For each, the third object can be any of the other 26, giving 28 · 26 = 728. But a triple of three consecutive objects contains two adjacent pairs, so it was counted twice. There are 28 such triples, so subtract 28 once: 728 − 28 = 700 triples contain an adjacent pair.
So triples with no two adjacent: 3276 − 700 = 2576.

Step 3 - Among these, remove triples with a diametrically opposite pair. Choose the opposite pair: 14 ways. The third object must not be one of the pair, and must not be adjacent to either of them (that would break the "no adjacent" condition we are still inside). That rules out 2 + 4 = 6 objects, leaving 22 choices. So 14 · 22 = 308 triples. No triple can contain two opposite pairs, so none is counted twice.

Step 4 - Subtract. 2576 − 308 = 2268.

Answer: 2268.

(Bonus: the same method for 32, 36, 40 objects, which appear in the other 2015 papers, gives 3616, 5412 and 7720.)`],

/* ---- batch 2: Geometry ---- */
[G,"Rotation","Easy","RMO 2013, Paper 2, Q4",
`Let ABC be a triangle with ∠A = 90° and AB = AC. Let D and E be points on the segment BC such that BD : DE : EC = 1 : 2 : √3. Prove that ∠DAE = 45°.`,
`BIG IDEA: Rotate triangle ABD by 90° about A. The Pythagorean relation BD² + EC² = DE² then forces two triangles to be congruent.

Step 1 - The ratios. With BD = k, DE = 2k, EC = √3·k we have BD² + EC² = k² + 3k² = 4k² = DE².

Step 2 - Rotate. Rotate the plane 90° about A so that B goes to C (possible since AB = AC and ∠BAC = 90°). Let D go to D′. Then AD′ = AD, CD′ = BD and ∠ACD′ = ∠ABD = 45°.

Step 3 - A right angle at C. ∠D′CE = ∠D′CA + ∠ACB = 45° + 45° = 90°. So D′E² = D′C² + CE² = BD² + CE² = DE².

Step 4 - Congruent triangles. Triangles ADE and AD′E have AD = AD′, AE common and DE = D′E, so they are congruent (SSS). Hence ∠DAE = ∠D′AE.

Step 5 - Finish. ∠DAE + ∠EAD′ = ∠DAD′ = 90° (the rotation angle), so each is 45°. ∎

(The same proof works for BD : DE : EC = 3 : 5 : 4, since 3² + 4² = 5².)`],

[G,"Angle chasing","Easy","RMO 2016, Paper 2, Q1",
`Let ABC be a right-angled triangle with ∠B = 90°. Let I be the incentre of ABC. Let AI extended intersect BC at F. Draw a line perpendicular to AI at I. Let it intersect AC at E. Prove that IE = IF.`,
`BIG IDEA: Show that triangles CIE and CIF are congruent (they share CI and have two equal angles).

Step 1 - Name the angles. Let ∠A = 2α and ∠C = 2γ. Since ∠B = 90°, 2α + 2γ = 90°, so α + γ = 45°. Because I is the incentre, ∠IAC = α and ∠ICA = ∠ICB = γ.

Step 2 - Triangle CIE. In right triangle AIE (right angle at I), ∠AEI = 90° − α. E is on AC, so ∠IEC = 180° − ∠AEI = 90° + α. Also ∠ICE = γ.

Step 3 - Triangle CIF. In right triangle ABF, ∠BAF = α, so ∠AFB = 90° − α. I lies on AF, so ∠IFC = 180° − ∠AFB = 90° + α. Also ∠ICF = γ.

Step 4 - Congruence. Triangles CIE and CIF have ∠ICE = ∠ICF = γ, ∠IEC = ∠IFC = 90° + α, and share the side CI. By AAS they are congruent, so IE = IF. ∎`],

[G,"Trapezium with incircle","Easy","RMO 2014, Paper 4, Q1",
`Let ABCD be an isosceles trapezium having an incircle; let AB and CD be the parallel sides and let CE be the perpendicular from C on to AB. Prove that CE is equal to the geometric mean of AB and CD.`,
`BIG IDEA: A quadrilateral has an incircle exactly when opposite sides add up equally. This gives the length of the leg, and Pythagoras gives CE.

Step 1 - The leg. Since the trapezium has an incircle, AB + CD = AD + BC. It is isosceles, so AD = BC, giving BC = (AB + CD)/2.

Step 2 - The base of the right triangle. In an isosceles trapezium the foot E of the perpendicular from C cuts off BE = (AB − CD)/2 (the overhang on each side).

Step 3 - Pythagoras in triangle BEC.
CE² = BC² − BE² = ((AB + CD)² − (AB − CD)²)/4 = (4·AB·CD)/4 = AB·CD.

So CE = √(AB · CD), the geometric mean. ∎`],

[G,"Right triangles and inradius","Medium","RMO 2014, Paper 4, Q4",
`What is the minimal area of a right-angled triangle whose inradius is 1 unit?`,
`BIG IDEA: Write the inradius condition in terms of the legs, factor it as (a − 2)(b − 2) = 2, and use AM-GM.

Step 1 - Inradius of a right triangle. For legs a, b and hypotenuse c, the inradius is r = (a + b − c)/2. So r = 1 gives c = a + b − 2.

Step 2 - Use Pythagoras. c² = a² + b² gives (a + b − 2)² = a² + b². Expanding, a² + b² + 4 + 2ab − 4a − 4b = a² + b², i.e. ab − 2a − 2b + 2 = 0. Hence (a − 2)(b − 2) = 2.

Step 3 - The area. Let x = a − 2 and y = b − 2, so xy = 2 (and x, y > 0, because a, b > 2 for a legal triangle). Then
ab = (x + 2)(y + 2) = xy + 2(x + y) + 4 = 6 + 2(x + y).
By AM-GM, x + y ≥ 2√(xy) = 2√2, so ab ≥ 6 + 4√2.

Step 4 - Minimum. Area = ab/2 ≥ 3 + 2√2, with equality when x = y = √2, i.e. a = b = 2 + √2 (an isosceles right triangle).

Answer: 3 + 2√2.`],

/* ---- batch 2: Algebra ---- */
[A,"Inequalities","Easy","RMO 2014, Paper 2, Q2",
`Let x, y, z be positive real numbers. Prove that (y² + z²)/x + (z² + x²)/y + (x² + y²)/z ≥ 2(x + y + z).`,
`BIG IDEA: Split the sum into six fractions and pair each y²/x with an x using AM-GM, since y²/x + x ≥ 2y.

Step 1 - A basic inequality. For positive a, b: a²/b + b ≥ 2a (AM-GM, or (a − b)² ≥ 0 divided by b).

Step 2 - Apply it to all six terms.
y²/x + x ≥ 2y, z²/x + x ≥ 2z, z²/y + y ≥ 2z, x²/y + y ≥ 2x, x²/z + z ≥ 2x, y²/z + z ≥ 2y.

Step 3 - Add. The left sides add to (the original sum) + 2(x + y + z), since each of x, y, z appears twice among the added terms. The right sides add to 4(x + y + z).
So the original sum + 2(x + y + z) ≥ 4(x + y + z), i.e. the sum ≥ 2(x + y + z). ∎ (Equality at x = y = z.)`],

[A,"Completing the square","Easy","RMO 2014, Paper 3, Q2",
`Find all real numbers x and y such that x² + 2y² + 1/2 ≤ x(2y + 1).`,
`BIG IDEA: Move everything to one side and write it as a sum of two squares. A sum of squares that is at most 0 must be exactly 0.

Step 1 - Rearrange. The condition is x² + 2y² + 1/2 − 2xy − x ≤ 0.

Step 2 - Complete the squares. Write x² − 2xy + 2y² = (x − y)² + y². Let u = x − y. The left side becomes
u² + y² − (u + y) + 1/2 = (u − 1/2)² + (y − 1/2)².
(Check: expanding gives u² − u + 1/4 + y² − y + 1/4 = u² + y² − u − y + 1/2 ✓.)

Step 3 - Squeeze. So the inequality says (u − 1/2)² + (y − 1/2)² ≤ 0. Both squares are ≥ 0, so both are 0: u = 1/2 and y = 1/2. Then x = u + y = 1.

Answer: (x, y) = (1, 1/2) only. Check: 1 + 1/2 + 1/2 = 2 ≤ 1·(1 + 1) = 2 ✓.`],

[A,"Inequalities (AM-GM)","Easy","RMO 2014, Paper 4, Q2",
`If x and y are positive real numbers, prove that 4x⁴ + 4y³ + 5x² + y + 1 ≥ 12xy.`,
`BIG IDEA: Use AM-GM on small groups of terms to turn the left side into 9x² + 4y², then AM-GM once more.

Step 1 - First pair. 4x⁴ + 1 ≥ 2√(4x⁴) = 4x².

Step 2 - Second pair. 4y³ + y ≥ 2√(4y⁴) = 4y².

Step 3 - Add and include the leftover 5x². The left side is at least 4x² + 4y² + 5x² = 9x² + 4y².

Step 4 - AM-GM again. 9x² + 4y² ≥ 2√(36x²y²) = 12xy.

So 4x⁴ + 4y³ + 5x² + y + 1 ≥ 12xy. ∎`],

/* ---- batch 2: Number Theory ---- */
[N,"Divisibility","Easy","RMO 2014, Paper 3, Q3",
`Prove that there does not exist any positive integer n < 2310 such that n(2310 − n) is a multiple of 2310.`,
`BIG IDEA: 2310 is a product of distinct primes, and each prime has to divide n.

Step 1 - Factor. 2310 = 2 · 3 · 5 · 7 · 11.

Step 2 - Each prime divides n. Suppose 2310 divides n(2310 − n). Take any prime p among 2, 3, 5, 7, 11. Then p divides n(2310 − n), so p | n or p | 2310 − n. If p | 2310 − n, then since p | 2310, also p | n. So in both cases p | n.

Step 3 - Combine. All five primes are distinct, so their product 2310 divides n. But 0 < n < 2310. Contradiction. ∎`],

[N,"Divisibility rule for 11","Easy","RMO 2013, Paper 4, Q2",
`Determine the smallest prime that does not divide any five-digit number whose digits are in a strictly increasing order.`,
`BIG IDEA: Show 2, 3, 5, 7 each divide some such number, and show 11 divides none, using the alternating-sum rule.

Step 1 - Small primes do occur. 12346 is even; 12345 is divisible by 5 and (digit sum 15) by 3; 12348 = 7 × 1764. All have strictly increasing digits. So 2, 3, 5, 7 each divide one of them.

Step 2 - The rule for 11. For digits a, b, c, d, e, the number 10⁴a + 10³b + 10²c + 10d + e is congruent mod 11 to a − b + c − d + e (since 10 ≡ −1). So 11 divides it exactly when 11 divides T = a − b + c − d + e.

Step 3 - Bound T. With a < b < c < d < e and a ≥ 1 (five-digit):
T = a + (c − b) + (e − d) ≥ 1 + 1 + 1 = 3.
T = e + (c − d) + (a − b) ≤ 9 − 1 − 1 = 7.
So 3 ≤ T ≤ 7, and T can never be a multiple of 11 (it is not 0 or 11).

Step 4 - Conclude. No such number is divisible by 11, while 2, 3, 5, 7 all occur. The smallest prime that never divides is 11.`],

[N,"Digit sums and identities","Medium","RMO 2016, Paper 2, Q3",
`For any natural number n, expressed in base 10, let S(n) denote the sum of all digits of n. Find all natural numbers n such that n³ = 8S(n)³ + 6nS(n) + 1.`,
`BIG IDEA: The equation is the identity a³ + b³ + c³ − 3abc = 0 in disguise, which forces n = 2S(n) + 1. Then a size bound leaves one case.

Step 1 - Spot the identity. Let S = S(n). The equation says n³ + (−2S)³ + (−1)³ − 3·n·(−2S)·(−1) = 0, since 3·n·2S = 6nS. Use
a³ + b³ + c³ − 3abc = (a + b + c)·½[(a − b)² + (b − c)² + (c − a)²]
with a = n, b = −2S, c = −1.

Step 2 - Two cases. Either a + b + c = 0, i.e. n = 2S + 1, or a = b = c, which would need n = −1, impossible for a natural number. So n = 2S(n) + 1.

Step 3 - Bound n. If n has d digits then S ≤ 9d and n ≥ 10^(d−1). So 10^(d−1) ≤ 18d + 1, which fails for d ≥ 3 (100 > 55). So n has at most 2 digits.

Step 4 - Solve. One digit: n = 2n + 1 gives n = −1, no. Two digits, n = 10a + b: 10a + b = 2(a + b) + 1, so 8a − b = 1, i.e. b = 8a − 1. With a = 1, b = 7; with a ≥ 2, b ≥ 15 is not a digit.

Step 5 - Check. n = 17, S = 8: 17³ = 4913 and 8·512 + 6·17·8 + 1 = 4096 + 816 + 1 = 4913 ✓.

Answer: n = 17.`],

/* ---- batch 2: Combinatorics ---- */
[C,"Stars and bars","Easy","RMO 2013, Paper 3, Q1",
`Find the number of eight-digit numbers the sum of whose digits is 4.`,
`BIG IDEA: Count ways to share 4 units among 8 digit positions (stars and bars), remembering the first digit must be at least 1.

Step 1 - Remove the leading-digit restriction. The first digit is at least 1, so put 1 unit there at once. Now we must distribute the remaining 3 units among the 8 digits (the first digit can get 0 or more extra).

Step 2 - Count. The number of ways to write 3 as a sum of 8 non-negative integers is C(3 + 7, 7) = C(10, 3) = 120.

Step 3 - No digit exceeds 9. The largest digit that can occur is 4, so every distribution gives a valid digit string.

Answer: 120.`],

[C,"Counting by cases","Medium","RMO 2014, Paper 3, Q6",
`For any natural number n, let S(n) denote the sum of the digits of n. Find the number of all 3-digit numbers n such that S(S(n)) = 2.`,
`BIG IDEA: A 3-digit number has digit sum between 1 and 27. For S(S(n)) = 2, the digit sum S(n) must be 2, 11 or 20. Count 3-digit numbers for each.

Step 1 - Possible values of S(n). S(S(n)) = 2 with S(n) ≤ 27 gives S(n) ∈ {2, 11, 20}.

Step 2 - S(n) = 2. The 3-digit numbers are 101, 110, 200: 3 numbers.

Step 3 - S(n) = 11. Digits a + b + c = 11 with a from 1 to 9 and b, c from 0 to 9. For each a, count pairs (b, c) with b + c = 11 − a:
a = 1: b + c = 10 → 9 pairs; a = 2: 9 → 10; a = 3: 8 → 9; a = 4: 7 → 8; a = 5: 6 → 7; a = 6: 5 → 6; a = 7: 4 → 5; a = 8: 3 → 4; a = 9: 2 → 3.
Total 9 + 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 = 61.

Step 4 - S(n) = 20. Replace each digit d by 9 − d. Then the new digits sum to 27 − 20 = 7, and the new first digit is at most 8 (fine). The number of triples of non-negative digits with sum 7 is C(9, 2) = 36 (all digits are at most 7, so no digit exceeds 9).

Step 5 - Add. 3 + 61 + 36 = 100.

Answer: 100.`],

[C,"Invariants","Medium","RMO 2016, Paper 4, Q4",
`A box contains 4032 answer scripts out of which exactly half have odd number of marks. We choose 2 scripts randomly and, if the scores on both of them are odd number, we add one mark to one of them, put the script back in the box and keep the other script outside. If both scripts have even scores, we put back one of the scripts and keep the other outside. If there is one script with even score and the other with odd score, we put back the script with the odd score and keep the other script outside. After following this procedure a number of times, there are 3 scripts left among which there is at least one script each with odd and even scores. Find, with proof, the number of scripts with odd scores among the three left.`,
`BIG IDEA: Find a quantity that never changes, here the parity of the number of odd scripts, and use it at the start and the end.

Step 1 - Track the number of odd scripts. Let O be the number of scripts in the box with an odd score.
- Both chosen scripts are odd: one gets +1 and becomes even and goes back, the other leaves. Two odd scripts disappear from the box's odd count (one left, one became even), so O decreases by 2.
- Both are even: one goes back, one leaves. O does not change.
- One even, one odd: the odd one goes back, the even one leaves. O does not change.

Step 2 - The parity never changes. In every case O changes by 0 or −2, so O mod 2 is constant.

Step 3 - Use the start. Initially half of 4032 scripts are odd, so O = 2016, which is even. So O is always even.

Step 4 - Use the end. With 3 scripts left, at least one odd and at least one even, O is 1 or 2. Since O is even, O = 2.

Answer: 2 of the three remaining scripts have odd scores. ∎`],

/* ---- batch 3: RMO 2002 and 2003 ---- */
[G,"Areas and ratios","Easy","RMO 2003, Q5",
`Suppose P is an interior point of a triangle ABC such that the ratios d(A, BC)/d(P, BC), d(B, CA)/d(P, CA), d(C, AB)/d(P, AB) are all equal. Find the common value of these ratios. Here d(X, YZ) denotes the perpendicular distance from a point X to the line YZ.`,
`BIG IDEA: Triangles on the same base have areas in the ratio of their heights. So each ratio is a ratio of areas, and the three small triangles add up to the big one.

Step 1 - Ratios become area ratios. Triangles ABC and PBC share the base BC, so d(A, BC)/d(P, BC) = [ABC]/[PBC]. Likewise the other two ratios are [ABC]/[PCA] and [ABC]/[PAB]. Call the common value k.

Step 2 - The pieces. Then [PBC] = [ABC]/k, [PCA] = [ABC]/k and [PAB] = [ABC]/k.

Step 3 - Add up. Because P is inside the triangle, [PBC] + [PCA] + [PAB] = [ABC]. So 3·[ABC]/k = [ABC], giving k = 3.

Answer: 3. (It follows that all three areas are equal, so P is the centroid.)`],

[G,"Cyclic quadrilaterals and lengths","Medium","RMO 2002, Q1",
`In an acute triangle ABC, points D, E, F are located on the sides BC, CA, AB respectively such that CD/CE = CA/CB, AE/AF = AB/AC, BF/BD = BC/BA. Prove that AD, BE, CF are the altitudes of ABC.`,
`BIG IDEA: Use the three ratio conditions to find CD in terms of the sides. It turns out to be b·cos C, which is exactly where the altitude from A meets BC.

Notation. a = BC, b = CA, c = AB, and let CD = x.

Step 1 - Chase the lengths around. From CD/CE = CA/CB: CE = CD·CB/CA = ax/b.
Then AE = b − ax/b = (b² − ax)/b.
From AE/AF = AB/AC: AF = AE·AC/AB = (b² − ax)/c.
Then BF = c − AF = (c² − b² + ax)/c.
From BF/BD = BC/BA: BD = BF·BA/BC = (c² − b² + ax)/a.

Step 2 - Use BD + DC = a. So a − x = (c² − b² + ax)/a, i.e. a² − ax = c² − b² + ax. Hence
2ax = a² + b² − c², so x = (a² + b² − c²)/(2a) = b·cos C (cosine rule).

Step 3 - Identify D. If L is the foot of the perpendicular from A to BC, then in the right triangle ALC, CL = b·cos C. Since the triangle is acute, L lies on the segment BC. So CD = CL, i.e. D = L, and AD ⟂ BC.

Step 4 - The other two. The three conditions are cyclic (A → B → C → A), so the same calculation shows BE ⟂ CA and CF ⟂ AB. ∎`],

[A,"Equations (cubic identity)","Easy","RMO 2002, Q2",
`Solve the following equation for real x: (x² + x − 2)³ + (2x² − x − 1)³ = 27(x² − 1)³.`,
`BIG IDEA: Let u and v be the two bases on the left. Their sum is exactly 3(x² − 1), so the equation says u³ + v³ = (u + v)³.

Step 1 - Substitute. Let u = x² + x − 2 and v = 2x² − x − 1. Then u + v = 3x² − 3 = 3(x² − 1), so (u + v)³ = 27(x² − 1)³. The equation becomes u³ + v³ = (u + v)³.

Step 2 - Expand. (u + v)³ = u³ + v³ + 3uv(u + v), so the equation reduces to 3uv(u + v) = 0, i.e. u = 0 or v = 0 or u + v = 0.

Step 3 - Solve each.
u = 0: x² + x − 2 = (x + 2)(x − 1) = 0, so x = −2 or 1.
v = 0: 2x² − x − 1 = (2x + 1)(x − 1) = 0, so x = −1/2 or 1.
u + v = 0: 3(x² − 1) = 0, so x = ±1.

Answer: x ∈ {1, −1, −2, −1/2}. (x = 1 appears in all three cases.)`],

[A,"Inequalities (bounding sums)","Easy","RMO 2002, Q6",
`For any natural number n > 1, prove the inequality 1/2 < 1/(n² + 1) + 2/(n² + 2) + 3/(n² + 3) + ⋯ + n/(n² + n) < 1/2 + 1/(2n).`,
`BIG IDEA: Compare every denominator with the smallest one and with the largest one. Each bound turns the sum into 1 + 2 + ⋯ + n over a single denominator.

Step 1 - The sum of the numerators. 1 + 2 + ⋯ + n = n(n + 1)/2.

Step 2 - Lower bound. Each denominator n² + k is at most n² + n, so k/(n² + k) > k/(n² + n) (strict for k < n). Hence the sum is greater than
(1 + 2 + ⋯ + n)/(n² + n) = [n(n + 1)/2] / [n(n + 1)] = 1/2.

Step 3 - Upper bound. Each denominator n² + k is bigger than n², so k/(n² + k) < k/n². Hence the sum is less than
(1 + 2 + ⋯ + n)/n² = (n + 1)/(2n) = 1/2 + 1/(2n). ∎`],

[A,"Equations with absolute value","Easy","RMO 2003, Q6",
`Find all real numbers a for which the equation x² + (a − 2)x + 1 = 3|x| has exactly three distinct real solutions in x.`,
`BIG IDEA: Split into x ≥ 0 and x < 0. In both quadratics the product of the roots is 1, so the roots have the same sign, and we just count valid roots.

Step 1 - Two quadratics.
For x ≥ 0: x² + (a − 5)x + 1 = 0.   (1)
For x < 0: x² + (a + 1)x + 1 = 0.   (2)
In each, the product of the roots is 1, so any real roots have the same sign.

Step 2 - When does (1) give valid roots? Real roots need (a − 5)² ≥ 4, i.e. a ≤ 3 or a ≥ 7. They must be positive, so their sum 5 − a > 0, i.e. a < 5. So (1) has two valid roots for a < 3, exactly one (a double root x = 1) for a = 3, and none for a > 3.

Step 3 - When does (2) give valid roots? Real roots need (a + 1)² ≥ 4, i.e. a ≥ 1 or a ≤ −3. They must be negative, so their sum −(a + 1) < 0, i.e. a > −1. So (2) has two valid roots for a > 1, exactly one (the double root x = −1) for a = 1, and none for a < 1.

Step 4 - Count the solutions.
a < 1: 2 + 0 = 2. a = 1: 2 + 1 = 3. 1 < a < 3: 2 + 2 = 4. a = 3: 1 + 2 = 3. a > 3: 0 + 2 = 2.

Step 5 - Check. a = 1: x² − 4x + 1 = 0 gives 2 ± √3 (both positive) and x² + 2x + 1 = 0 gives −1. Three solutions ✓. a = 3: x² − 2x + 1 = 0 gives 1, and x² + 4x + 1 = 0 gives −2 ± √3 (both negative). Three solutions ✓.

Answer: a = 1 or a = 3.`],

[N,"Diophantine equations","Easy","RMO 2002, Q7",
`Find all integers a, b, c, d satisfying: (i) 1 ≤ a ≤ b ≤ c ≤ d; (ii) ab + cd = a + b + c + d + 3.`,
`BIG IDEA: Move everything to one side and add 2 to complete two "(x − 1)(y − 1)" products. Then the sum is a small number and there are few cases.

Step 1 - Factor. ab − a − b + 1 + cd − c − d + 1 = 5, i.e. (a − 1)(b − 1) + (c − 1)(d − 1) = 5.

Step 2 - Bound a. If a − 1 ≥ 2, then b − 1, c − 1, d − 1 are all at least 2 too, and the left side is at least 4 + 4 = 8 > 5. So a = 1 or a = 2.

Step 3 - Case a = 1. Then (c − 1)(d − 1) = 5, with c ≤ d: c − 1 = 1 and d − 1 = 5, so c = 2, d = 6. Since b ≤ c = 2, b = 1 or 2. Solutions: (1, 1, 2, 6) and (1, 2, 2, 6).

Step 4 - Case a = 2. Then b ≥ 2 and (b − 1) + (c − 1)(d − 1) = 5. If b = 2, (c − 1)(d − 1) = 4 with c ≥ 2: (c − 1, d − 1) = (1, 4) or (2, 2). Solutions: (2, 2, 2, 5) and (2, 2, 3, 3). If b ≥ 3, then c − 1 ≥ 2 and d − 1 ≥ 2, so (c − 1)(d − 1) ≥ 4 while it must equal 6 − b ≤ 3. Impossible.

Check: 1·1 + 2·6 = 13 = 1 + 1 + 2 + 6 + 3 ✓; 1·2 + 12 = 14 = 1 + 2 + 2 + 6 + 3 ✓; 4 + 10 = 14 = 2 + 2 + 2 + 5 + 3 ✓; 4 + 9 = 13 = 2 + 2 + 3 + 3 + 3 ✓.

Answer: (1,1,2,6), (1,2,2,6), (2,2,2,5), (2,2,3,3).`],

[N,"Divisibility","Medium","RMO 2002, Q3",
`Let a, b, c be positive integers such that a divides b², b divides c² and c divides a². Prove that abc divides (a + b + c)⁷.`,
`BIG IDEA: Expand (a + b + c)⁷. Every term is a multiple of a^k·b^l·c^m with k + l + m = 7. Show that abc divides each such product.

Step 1 - Useful chains. From c | a² and b | c²: b | c² | a⁴... more precisely c² | a⁴, so b | a⁴. From a | b² and c | a²: c | a² | b⁴, so c | b⁴. From b | c² and a | b²: a | b² | c⁴, so a | c⁴. The three conditions are cyclic (a → b → c → a), so we may assume a term has no c (m = 0); the other cases follow by symmetry.

Step 2 - Terms with all three letters. If k, l, m ≥ 1 then abc obviously divides a^k b^l c^m.

Step 3 - Pure powers.
a⁷: b | a⁴ and c | a², so bc | a⁶, hence abc | a⁷.
b⁷: a | b² and c | b⁴, so ac | b⁶, hence abc | b⁷.
c⁷: a | c⁴ and b | c², so ab | c⁶, hence abc | c⁷.

Step 4 - Two letters, e.g. a^k b^l with k, l ≥ 1 and k + l = 7. We need an extra factor c. If k ≥ 3, then a^(k−1) is divisible by a², hence by c. If k ≤ 2, then l ≥ 5 and b^(l−1) is divisible by b⁴, hence by c. Either way abc | a^k b^l. The other pairs follow by cyclic symmetry.

So abc divides every term, and therefore divides (a + b + c)⁷. ∎`],

[C,"Pairing and sorting","Easy","RMO 2002, Q4",
`Suppose the integers 1, 2, 3, …, 10 are split into two disjoint collections a₁, a₂, a₃, a₄, a₅ and b₁, b₂, b₃, b₄, b₅ such that a₁ < a₂ < a₃ < a₄ < a₅ and b₁ > b₂ > b₃ > b₄ > b₅. (i) Show that the larger number in any pair {aⱼ, bⱼ}, 1 ≤ j ≤ 5, is at least 6. (ii) Show that |a₁ − b₁| + |a₂ − b₂| + |a₃ − b₃| + |a₄ − b₄| + |a₅ − b₅| = 25 for every such partition.`,
`BIG IDEA: Count how many numbers are below each aⱼ and below each bⱼ. This shows the pairs always match up the five small numbers with the five large ones.

Part (i). Fix j. The numbers smaller than aⱼ include a₁, …, aⱼ₋₁: that is j − 1 numbers. The numbers smaller than bⱼ include bⱼ₊₁, …, b₅: that is 5 − j numbers. Now take the larger of aⱼ and bⱼ. It is bigger than all of these (j − 1) + (5 − j) = 4 numbers, which are all different (each number is in exactly one collection), and it is also bigger than the smaller of the two. So at least 4 + 1 = 5 numbers are below it, and it is at least 6.

Part (ii). By (i), in each of the five pairs the larger number is 6 or more, and there are five pairs, so the larger numbers are exactly 6, 7, 8, 9, 10 and the smaller numbers are exactly 1, 2, 3, 4, 5. Each |aⱼ − bⱼ| is (larger) − (smaller), so the sum is
(6 + 7 + 8 + 9 + 10) − (1 + 2 + 3 + 4 + 5) = 40 − 15 = 25. ∎`],

[C,"Prime factorisation and sets","Easy","RMO 2003, Q7",
`Consider the set X = {1, 2, 3, …, 10}. Find two disjoint nonempty subsets A and B of X such that (a) A ∪ B = X; (b) prod(A) is divisible by prod(B), where for any finite set of numbers C, prod(C) denotes the product of all numbers in C; (c) the quotient prod(A)/prod(B) is as small as possible.`,
`BIG IDEA: Look at the prime factor 7, which appears in only one number. It forces a lower bound of 7, and then we build an example reaching it.

Step 1 - The prime 7. The only number in X divisible by 7 is 7 itself. If 7 were in B, then 7 would divide prod(B) but not prod(A), contradicting (b). So 7 ∈ A, and prod(A)/prod(B) is a multiple of 7, hence at least 7.

Step 2 - Aim for exactly 7. We want the other primes to cancel exactly.
- Prime 5: it divides 5 and 10. Put 5 in A and 10 in B.
- Prime 3: it divides 3, 6 (once each) and 9 (twice). Put 3 and 6 in A, and 9 in B.
- Prime 2: 2, 4, 6, 8, 10 contribute 1, 2, 1, 3, 1 factors. With 6 in A and 10 in B, put 2 and 4 in A, and 8 in B.
- 1 can go anywhere, say A.

Step 3 - Check. A = {1, 2, 3, 4, 5, 6, 7} and B = {8, 9, 10}.
prod(A)/prod(B) = 5040/720 = 7.

Answer: A = {1, 2, 3, 4, 5, 6, 7}, B = {8, 9, 10}, and the minimum quotient is 7. (Another valid choice is A = {3, 5, 6, 7, 8}, B = {1, 2, 4, 9, 10}.)`],

/* ---- batch 4: RMO 2001-2015 (various regions) ---- */
[G,"Tangential trapezium","Easy","RMO 2006, Q5",
`Let ABCD be a quadrilateral in which AB is parallel to CD and perpendicular to AD; AB = 3CD; and the area of the quadrilateral is 4. If a circle can be drawn touching all the sides of the quadrilateral, find its radius.`,
`BIG IDEA: Let CD = x. A circle touching all four sides means AB + CD = AD + BC. Write BC with Pythagoras, solve for the height, and use the area.

Step 1 - Set up. CD = x, AB = 3x, and the height is h = AD (since AD ⟂ AB and AD ⟂ CD). The horizontal gap between B and C is AB − CD = 2x, so BC² = h² + (2x)².

Step 2 - Tangential condition. AB + CD = AD + BC gives 4x = h + BC, so BC = 4x − h.

Step 3 - Solve. (4x − h)² = h² + 4x² gives 16x² − 8xh + h² = h² + 4x², i.e. 12x² = 8xh, so h = 3x/2.

Step 4 - Use the area. Area = ½(AB + CD)·h = ½(4x)(3x/2) = 3x² = 4, so x² = 4/3 and h = 3x/2 = (3/2)(2/√3) = √3.

Step 5 - The radius. The incircle touches both parallel sides AB and CD, so its diameter is the height: 2r = √3.

Answer: r = √3/2.`],

[G,"Coordinates and ratios","Easy","RMO 2013, Mumbai Region, Q4",
`In a triangle ABC, points D and E are on segments BC and AC such that BD = 3DC and AE = 4EC. Point P is on line ED such that D is the mid-point of segment EP. Lines AP and BC intersect at point S. Find the ratio BS/SD.`,
`BIG IDEA: Use coordinates with A left general. Only the ratios along each line matter, so the final answer will not depend on A.

Step 1 - Coordinates. Let C = (0, 0), D = (1, 0), B = (4, 0), so that DC = 1 and BD = 3. Let A = (a, b).

Step 2 - Points E and P. AE = 4EC means E = (1/5)A = (a/5, b/5). D is the midpoint of EP, so P = 2D − E = (2 − a/5, −b/5).

Step 3 - Find S on BC (the line y = 0). Points on line AP are A + t(P − A) = (a + t(2 − 6a/5), b − 6bt/5). The y-coordinate is zero when t = 5/6. Then x = a + (5/6)(2 − 6a/5) = a + 5/3 − a = 5/3. So S = (5/3, 0).

Step 4 - The ratio. BS = 4 − 5/3 = 7/3 and SD = 5/3 − 1 = 2/3, so BS/SD = (7/3)/(2/3) = 7/2.

Answer: 7/2.`],

[G,"Coordinates and ratios","Easy","RMO 2012, Paper 2, Q5",
`Let ABC be a triangle. Let D, E be points on the segment BC such that BD = DE = EC. Let F be the mid-point of AC. Let BF intersect AD in P and AE in Q respectively. Determine BP/PQ.`,
`BIG IDEA: Put B at the origin and BC on the x-axis, keep A general, and measure everything as a fraction of BF.

Step 1 - Coordinates. B = (0, 0), D = (1, 0), E = (2, 0), C = (3, 0), A = (p, q). Then F = ((p + 3)/2, q/2). Any point on BF is λ·F, and λ = 1 is F itself.

Step 2 - Point P (on AD). Points of AD are (p + u(1 − p), q(1 − u)). Matching the y-coordinate of λF gives λ = 2(1 − u). Matching the x-coordinate: p + u(1 − p) = (p + 3)(1 − u), which simplifies to u = 3 − 3u, so u = 3/4. Hence λ_P = 2(1/4) = 1/2: BP = ½·BF.

Step 3 - Point Q (on AE). Points of AE are (p + v(2 − p), q(1 − v)), and λ = 2(1 − v). The x-coordinate gives p + v(2 − p) = (p + 3)(1 − v), which simplifies to 5v = 3, so v = 3/5. Hence λ_Q = 2(2/5) = 4/5: BQ = (4/5)·BF.

Step 4 - The ratio. PQ = BQ − BP = (4/5 − 1/2)·BF = (3/10)·BF. So BP/PQ = (1/2)/(3/10) = 5/3.

Answer: 5/3 (it does not depend on where A is).`],

[G,"Circles and tangency","Easy","RMO 2012, Paper 2, Q1",
`Let ABCD be a unit square. Draw a quadrant of a circle with A as centre and B, D as end points of the arc. Similarly, draw a quadrant of a circle with B as centre and A, C as end points of the arc. Inscribe a circle Γ touching the arc AC internally, the arc BD internally and also touching the side AB. Find the radius of the circle Γ.`,
`BIG IDEA: Put the square on coordinates. A circle that touches a bigger circle internally has its centre at distance (big radius − small radius) from the big centre.

Step 1 - Coordinates. A = (0, 0), B = (1, 0), C = (1, 1), D = (0, 1). The arc BD lies on the circle with centre A and radius 1, and the arc AC lies on the circle with centre B and radius 1.

Step 2 - The centre of Γ. Γ touches AB (the line y = 0), so its centre is O = (h, r) where r is its radius.

Step 3 - Tangency conditions. Γ touches the circle centred at A internally, so OA = 1 − r. It touches the circle centred at B internally, so OB = 1 − r. Since OA = OB, h = 1/2.

Step 4 - Solve. OA² = 1/4 + r² = (1 − r)² = 1 − 2r + r². So 1/4 = 1 − 2r, giving r = 3/8.

Answer: r = 3/8.`],

[G,"Trigonometry and angle chasing","Medium","RMO 2005, Q5",
`In triangle ABC, let D be the mid-point of BC. If ∠ADB = 45° and ∠ACD = 30°, determine ∠BAD.`,
`BIG IDEA: Use the sine rule in triangles ADC and ABD, with BD = DC. The condition becomes an equation in ∠BAD alone, and it has exactly one solution.

Step 1 - Triangle ADC. ∠ADC = 180° − 45° = 135°, so ∠DAC = 180° − 135° − 30° = 15°. By the sine rule with DC = m: AD/sin 30° = m/sin 15°, so AD = m/(2 sin 15°).

Step 2 - Triangle ABD. Let ∠BAD = x. Then ∠ABD = 180° − 45° − x = 135° − x. By the sine rule: AD/sin(135° − x) = BD/sin x. With BD = DC = m this gives
sin x / sin(135° − x) = BD/AD = 2 sin 15°.

Step 3 - Try x = 30°. sin 30° / sin 105° = (1/2)/cos 15°. And 2 sin 15° · cos 15° = sin 30° = 1/2, so 2 sin 15° = (1/2)/cos 15°. ✓ So x = 30° works.

Step 4 - It is the only solution. Let f(x) = sin x / sin(135° − x) for 0° < x < 135°. Using cot A + cot B = sin(A + B)/(sin A sin B), f′(x)/f(x) = cot x + cot(135° − x) = sin 135°/(sin x sin(135° − x)) > 0. So f is strictly increasing and takes the value 2 sin 15° only once.

Answer: ∠BAD = 30°.`],

[G,"Rhombus and area","Easy","RMO 2015, Mumbai Region, Q1",
`Let ABCD be a convex quadrilateral with AB = a, BC = b, CD = c and DA = d. Suppose a² + b² + c² + d² = ab + bc + cd + da and the area of ABCD is 60 square units. If the length of one of the diagonals is 30 units, determine the length of the other diagonal.`,
`BIG IDEA: The condition is a sum of squares in disguise. It forces all four sides to be equal, so ABCD is a rhombus, and a rhombus has a simple area formula.

Step 1 - Sum of squares. Move everything to one side and multiply by 2:
(a − b)² + (b − c)² + (c − d)² + (d − a)² = 0.

Step 2 - All sides equal. A sum of squares is zero only if each square is zero, so a = b = c = d. A quadrilateral with four equal sides is a rhombus.

Step 3 - Area. The diagonals of a rhombus are perpendicular, so its area is ½·d₁·d₂.

Step 4 - Compute. 60 = ½ · 30 · d₂, so d₂ = 4.

Answer: the other diagonal is 4 units long.`],

[A,"Inequalities","Medium","RMO 2004, Q7",
`Let x and y be positive real numbers such that y³ + y ≤ x − x³. Prove that (a) y < x < 1; and (b) x² + y² ≤ 1.`,
`BIG IDEA: Use positivity to compare x with y and with 1. For (b), turn the hypothesis into x³ + y³ ≤ x − y and compare with (x − y)(x² + y²).

Part (a), x < 1. Since y > 0, y³ + y > 0, so x − x³ > 0, i.e. x(1 − x²) > 0. As x > 0, this gives x < 1.

Part (a), y < x. Suppose y ≥ x. Then y³ + y ≥ x³ + x. But x³ + x > x − x³ (because 2x³ > 0), so y³ + y > x − x³, contradicting the hypothesis. Hence y < x.

Part (b). Rearranging the hypothesis: x³ + y³ ≤ x − y. Now compare with (x − y)(x² + y²) = x³ − x²y + xy² − y³:
(x³ + y³) − (x − y)(x² + y²) = x²y − xy² + 2y³ = y(x² − xy + 2y²) > 0
(the bracket is positive since x² − xy + 2y² = (x − y/2)² + (7/4)y²).
So (x − y)(x² + y²) < x³ + y³ ≤ x − y. Since x − y > 0, dividing gives x² + y² < 1, in particular x² + y² ≤ 1. ∎`],

[N,"Modular arithmetic","Easy","RMO 2001, Q7",
`Prove that the product of the first 1000 positive even integers differs from the product of the first 1000 odd integers by a multiple of 2001.`,
`BIG IDEA: Each even number 2k is congruent mod 2001 to minus an odd number: 2k ≡ −(2001 − 2k). So the product of evens equals, up to sign, the product of odds.

Step 1 - Rewrite each even number. The first 1000 even numbers are 2, 4, …, 2000. For each 2k, the number 2001 − 2k is odd, and 2k ≡ −(2001 − 2k) (mod 2001).

Step 2 - What odd numbers appear? As 2k runs through 2, 4, …, 2000, the number 2001 − 2k runs through 1999, 1997, …, 1. These are exactly the first 1000 odd numbers, each once.

Step 3 - The product. Multiplying all 1000 congruences, the product of the evens is ≡ (−1)¹⁰⁰⁰ · (1 · 3 · 5 ⋯ 1999) = 1 · 3 · 5 ⋯ 1999 (mod 2001), because (−1)¹⁰⁰⁰ = 1.

So the two products leave the same remainder mod 2001, i.e. their difference is a multiple of 2001. ∎`],

[N,"Primes and parity","Medium","RMO 2004, Q6",
`Let (p₁, p₂, p₃, …) be a sequence of primes defined by p₁ = 2 and for n ≥ 1, p_(n+1) is the largest prime factor of p₁p₂⋯pₙ + 1. (Thus p₂ = 3, p₃ = 7.) Prove that pₙ ≠ 5 for any n.`,
`BIG IDEA: If 5 were the largest prime factor, then p₁⋯pₙ + 1 would have to be a power of 5. That forces p₁⋯pₙ to be a multiple of 4, but it has only one factor of 2.

Step 1 - The primes are distinct. Let P = p₁p₂⋯pₙ. A prime factor of P + 1 cannot divide P, so p_(n+1) is different from p₁, …, pₙ. So all the pᵢ are distinct.

Step 2 - Small cases. p₁ = 2, p₂ = 3. For n ≥ 2, P is divisible by 2 and 3 (since p₁ = 2 and p₂ = 3).

Step 3 - Suppose p_(n+1) = 5 for some n ≥ 2. Then every prime factor of P + 1 is at most 5. But P + 1 is not divisible by 2 or 3 (P is divisible by both), so its prime factors can only be 5. So P + 1 = 5^k for some k ≥ 1.

Step 4 - Contradiction. Then P = 5^k − 1. Since 5 ≡ 1 (mod 4), 5^k − 1 ≡ 0 (mod 4). But P contains exactly one factor of 2: p₁ = 2 is the only even prime and the pᵢ are distinct. So 4 does not divide P. Contradiction.

Step 5 - The remaining cases. p₁ = 2, p₂ = 3, and p_(n+1) = 5 is impossible for n = 1 as well (2 + 1 = 3). So no pₙ equals 5. ∎`],

[C,"Extremal argument","Easy","RMO 2006, Q4",
`A 6×6 square is dissected into 9 rectangles by lines parallel to its sides such that all these rectangles have only integer sides. Prove that there are always two congruent rectangles.`,
`BIG IDEA: If no two rectangles were congruent, the nine rectangles would all be different shapes. List the smallest possible areas of different integer rectangles that fit in a 6×6 square, and show their total exceeds 36.

Step 1 - What shapes are available? Each rectangle has integer sides a × b with a ≤ b ≤ 6 (it has to fit inside the square).

Step 2 - Smallest areas, shape by shape. In increasing order of area:
1×1 (area 1), 1×2 (2), 1×3 (3), 1×4 (4), 2×2 (4), 1×5 (5), 1×6 (6), 2×3 (6), 2×4 (8), 3×3 (9), …

Step 3 - Nine different shapes cost at least 39. If the nine rectangles were pairwise non-congruent, their total area would be at least the sum of the nine smallest listed areas: 1 + 2 + 3 + 4 + 4 + 5 + 6 + 6 + 8 = 39.

Step 4 - Contradiction. The nine rectangles tile the square, so their total area is exactly 36. But 39 > 36. Hence two of the rectangles must be congruent. ∎`],

[C,"Counting pairs of sets","Easy","RMO 2012, Paper 2, Q4",
`Let X = {1, 2, 3, …, 12}. Find the number of pairs {A, B} such that A ⊆ X, B ⊆ X, A ≠ B and A ∩ B = {2, 3, 5, 7, 8}.`,
`BIG IDEA: Look at each element of X separately. The five elements of the intersection are in both sets, and each of the other seven elements has exactly three choices.

Step 1 - The fixed part. The elements 2, 3, 5, 7, 8 belong to both A and B. That is forced.

Step 2 - The other seven elements. Each of the remaining 7 elements must NOT be in both sets (otherwise it would be in A ∩ B). So each has 3 options: in A only, in B only, or in neither. That gives 3⁷ = 2187 ordered pairs (A, B).

Step 3 - Remove A = B. A = B happens only when every one of the 7 elements is in neither set (so both sets equal {2, 3, 5, 7, 8}). That is 1 ordered pair.

Step 4 - Count unordered pairs. The ordered pairs with A ≠ B number 2187 − 1 = 2186. Each unordered pair {A, B} corresponds to exactly 2 ordered pairs, so there are 2186/2 = 1093.

Answer: 1093.`],

[C,"Counting by residues","Medium","RMO 2013, Mumbai Region, Q3",
`A finite non-empty set of integers is called 3-good if the sum of its elements is divisible by 3. Find the number of non-empty 3-good subsets of {0, 1, 2, …, 9}.`,
`BIG IDEA: Sort the numbers by their remainder mod 3. Choose how many from each remainder class, and count the choices whose total is divisible by 3.

Step 1 - The classes. Remainder 0: {0, 3, 6, 9} (4 numbers). Remainder 1: {1, 4, 7} (3 numbers). Remainder 2: {2, 5, 8} (3 numbers).

Step 2 - Remainder-0 numbers don't matter. They add 0 to the sum mod 3, so we may choose any subset of them: 2⁴ = 16 ways.

Step 3 - The condition on the other two classes. If we pick i numbers from the remainder-1 class and j from the remainder-2 class, the sum is ≡ i + 2j ≡ i − j (mod 3). We need i ≡ j (mod 3), with 0 ≤ i, j ≤ 3. The possible pairs (i, j): (0,0), (1,1), (2,2), (3,3), (0,3), (3,0).

Step 4 - Count the choices. Using C(3, i)·C(3, j):
(0,0): 1·1 = 1; (1,1): 3·3 = 9; (2,2): 3·3 = 9; (3,3): 1·1 = 1; (0,3): 1·1 = 1; (3,0): 1·1 = 1. Total 22.

Step 5 - Combine and remove the empty set. 16 · 22 = 352 subsets (including the empty set, which has sum 0). Remove the empty set: 351.

Answer: 351.`],

[C,"Counting by cases","Easy","RMO 2015, Mumbai Region, Q2",
`Determine the number of 3-digit numbers in base 10 having at least one 5 and at most one 3.`,
`BIG IDEA: Split by how many 3's there are (none, or exactly one). In each case count the numbers with at least one 5 as (all numbers) − (numbers with no 5).

Case 1 - no 3 at all.
All 3-digit numbers with no 3: hundreds digit from {1, 2, 4, 5, 6, 7, 8, 9} (8 choices), the other two digits from {0, 1, 2, 4, 5, 6, 7, 8, 9} (9 choices each): 8·9·9 = 648.
With no 3 and no 5: hundreds digit 7 choices, the others 8 each: 7·8·8 = 448.
So with no 3 and at least one 5: 648 − 448 = 200.

Case 2 - exactly one 3.
- The 3 is in the hundreds place: the other two digits are chosen from the 9 digits other than 3: 9·9 = 81 numbers. Those with no 5: 8·8 = 64. So 81 − 64 = 17 have at least one 5.
- The 3 is in the tens place: hundreds digit from {1, 2, 4, …, 9} (8 choices), units digit from the 9 non-3 digits: 72 numbers. With no 5: 7·8 = 56. So 72 − 56 = 16.
- The 3 is in the units place: the same count as the tens place, 16.
Total for exactly one 3: 17 + 16 + 16 = 49.

Add: 200 + 49 = 249.

Answer: 249.`],
];

export const BANK = rows.map(([unit, subtopic, level, source, text, solution], i) => ({
  id: `b${i + 1}`, unit, subtopic, level, source, text, solution,
}));
