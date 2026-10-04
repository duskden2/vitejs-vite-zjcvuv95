// Keyed by PYQ id (see pyqs.js). src: "own" = solved by Claude, "video" = taken from your playlist.
// Add more entries in the same shape. Use backticks for text; avoid backticks and dollar-brace inside.
export const PYQ_SOLUTIONS = {
  "2017-1": { src: "own", text: `Let h be the homothety with centre P and ratio −2. Then h(C) = D whenever PD = 2·PC with C, P, D collinear and P between them. So D lies on h(line OA), a line through O' = h(O) parallel to OA.
Construction: (1) Extend OP beyond P to O' with PO' = 2·OP (compass). (2) Through O' draw the line parallel to OA. (3) Let it meet ray OB at D. (4) Let line DP meet ray OA at C.
Why it works: taking OA, OB as axes and P = (p, q) with p, q > 0, we get O' = (3p, 3q), so D = (0, 3q) lies on ray OB. Line DP then meets OA at C = (3p/2, 0), on ray OA, and P = (2C + D)/3, so CP : PD = 1 : 2.` },
  "2017-2": { src: "own", text: `Put m = a + 3. The seven cubes are (m + k)³ for k = −3..3, and the odd-power terms cancel: sum = 7m³ + 3m(9+4+1+0+1+4+9) = 7m³ + 84m = 7m(m² + 12). So the left side is divisible by 7.
Fourth powers mod 7 for b = 0..6 are 0, 1, 2, 4, 4, 2, 1. Then b⁴ + (b+1)⁴ mod 7 for b = 0..6 is 1, 3, 6, 1, 6, 3, 1. It is never 0, so the right side is never divisible by 7. No integer solutions.` },
  "2017-3": { src: "own", text: `P(x)Q(x) = Q(P(x)) = P² + cP + d, so P·(Q − P − c) = d. Here Q − P − c = (c − 1/2)x + (d − b − c) is linear. If it were not identically zero, the left side would have degree 2 or 3, not constant. So c = 1/2 and d = b + c, and then d = 0 (the right side is then 0). Hence b = −1/2, d = 0: P = x² + x/2 − 1/2, Q = x² + x/2.
P(Q(x)) = 0: with q = Q(x), q² + q/2 − 1/2 = (q + 1)(q − 1/2) = 0. Q(x) = −1 has no real root (discriminant 1/4 − 4 < 0). Q(x) = 1/2 gives 2x² + x − 1 = (2x − 1)(x + 1) = 0. Real roots: x = 1/2 and x = −1.` },
  "2017-4": { src: "own", text: `Answer: 2n − 1 (for n ≥ 2).
Lower bound: take the 2n − 1 squares (1,1), …, (n,1) of the bottom row and (n,2), …, (n,n) of the last column. Two squares (i,1), (j,1) with i < j are in the triple (i,1), (j,1), (j,l) for any l > 1, so they differ. Two squares (n,k), (n,l) with k < l lie in the triple (i,k), (n,k), (n,l), so they differ. And (i,1), (n,l) with i < n, l > 1 lie in the triple (i,1), (n,1), (n,l), so they differ. All 2n − 1 squares need distinct colours.
Construction: colour (i,j) with i + j, which takes 2n − 1 values. In a triple, i + k < j + k < j + l, so the colours are distinct.` },
  "2017-5": { src: "own", text: `The homothety at D taking Γ1 to Ω sends C to X (X lies on ray DC beyond C). It sends the tangent AB at C to the tangent to Ω at X, which is therefore parallel to AB. So X is the midpoint of an arc AB of Ω. Since X lies on line DC, on the opposite side of AB from D, it is the midpoint of the arc AB on Γ2's side.
In the same way, the homothety at F taking Γ2 to Ω makes Y the midpoint of the arc AB on Γ1's side. The midpoints of the two arcs AB both lie on the perpendicular bisector of AB through the centre O, one on each side of AB, so they are diametrically opposite. Hence XY is a diameter.` },

  "2018-7": { src: "own", text: `BIG IDEA: Use similar triangles from the tangent, show that if gcd(AB, AC) = 1 then BC would be too long for a triangle.

Step 1 - Name the sides. Let AB = c, AC = b (so c < b), BC = a, AD = d. All are integers.

Step 2 - Similar triangles. Because DA is tangent to the circle at A, the angle between the tangent DA and chord AB equals the angle in the alternate segment, ∠ACB. So triangles DAB and DCA have the same angle at D and ∠DAB = ∠DCA. They are similar, which gives
DB / DA = DA / DC = AB / CA = c / b.
So DB = d·c/b and DC = d·b/c.

Step 3 - Find BC. Since c < b, D lies beyond B on line CB, so
a = DC − DB = d·b/c − d·c/b = d(b² − c²) / (bc).
So bc divides d(b² − c²).

Step 4 - Assume the opposite. Suppose gcd(b, c) = 1. A prime dividing b cannot divide b² − c² (it would then divide c²). The same holds for primes dividing c. So b² − c² shares no prime factor with bc, and therefore bc must divide d. So d ≥ bc.

Step 5 - Get a contradiction. Then a = d(b² − c²)/(bc) ≥ b² − c² = (b − c)(b + c). Since b > c are integers, b − c ≥ 1, so a ≥ b + c.
But in any triangle BC < AB + AC, i.e. a < b + c. Contradiction.

So gcd(AB, AC) > 1.` },

  "2018-8": { src: "own", text: `BIG IDEA: Each term is at most k/2 (by AM-GM), and the total allowed is exactly the sum of the k/2, so every term must hit its maximum.

Step 1 - Rule out x = 0. The left side is 0, but the right side is positive. So x ≠ 0.

Step 2 - Rewrite each term. Divide top and bottom by x^k:
x^k / (1 + x^(2k)) = 1 / (x^k + x^(−k)).

Step 3 - Case x > 0. By AM-GM, x^k + x^(−k) ≥ 2, so each term k·x^k/(1 + x^(2k)) is at most k/2, with equality exactly when x^k = 1, i.e. x = 1.
Adding up, the left side is at most (1 + 2 + ... + n)/2 = n(n+1)/4, which is exactly the right side. So equality must hold in every term, which forces x = 1.

Step 4 - Case x < 0. Look at the k = 1 term: x/(1 + x²) is negative. Every other term is at most k/2 (for even k it is positive and bounded as before; for odd k it is negative). The k = 1 term is below 1/2 strictly, so the total is strictly less than n(n+1)/4. No solution.

Step 5 - Check. x = 1 gives k/2 for every term, and the sum is n(n+1)/4. ✓

Answer: x = 1 only.` },

  "2018-9": { src: "own", text: `BIG IDEA: Count all fractions with a repeating block of length dividing 8, then subtract those whose true period is 1, 2 or 4.

Step 1 - Fractions with a block of length d. A number r = 0.(M) with block length d equals M / (10^d − 1), where M is a whole number from 0 to 10^d − 2 (we stop at 10^d − 2 because M = 10^d − 1 would give 0.999... = 1, which is not of the form 0.abc...).

Step 2 - Add them up. The sum of M from 0 to 10^d − 2 is (10^d − 2)(10^d − 1)/2. Dividing by 10^d − 1:
T(d) = (10^d − 2) / 2.
This is the sum of all r that can be written with a block of length d.

Step 3 - Which r have period exactly 8? A number has period dividing 8 exactly when it can be written with a block of length 8. The true period of such a number is 1, 2, 4 or 8. Those with period 1, 2 or 4 can all be written with a block of length 4, so they are counted in T(4). Numbers with period exactly 8 are therefore counted in T(8) but not in T(4).

Step 4 - Subtract.
Sum = T(8) − T(4) = (10^8 − 2)/2 − (10^4 − 2)/2 = (10^8 − 10^4)/2 = 49995000.

Answer: 49995000.` },

  "2018-10": { src: "own", text: `BIG IDEA: Suppose, for contradiction, that every axis-parallel square has exactly two red and two blue corners. First see what this forces on the tiny 1 by 1 squares, then use the big 4 by 4 square.

Step 1 - Name the grid. Points (r, c) with r, c from 1 to 5. A square of the required type has corners (a, b), (a+k, b), (a+k, b+k), (a, b+k). The claim says some such square has at least 3 corners of one colour. Assume the opposite: every such square has exactly 2 red and 2 blue corners.

Step 2 - Look at a 1 by 1 square with 2 equal cells on top. If two side-by-side cells in some row have the same colour x, then the two cells directly below them must both be the other colour (to keep 2 and 2). So the pair "x x" is followed below by "x̄ x̄", and then "x x" again, and so on. Hence in those two columns the colours alternate down the column.

Step 3 - It spreads sideways. Take the next column. In a 1 by 1 square using two adjacent rows, we already know the two cells on the left have different colours (one x, one x̄). So the two cells on the right must also have different colours. So the next column also alternates, and the same goes for every column. 
So: if any row has two side-by-side equal cells, every column alternates colours going down. 

Step 4 - The other case. If no row has two equal side-by-side cells, every row alternates colours going across. By the same argument with rows and columns swapped, this is the mirror situation.

Step 5 - Use the 4 by 4 square. Take the first case (every column alternates). Rows 1 and 5 are four steps apart, an even distance, so each column has the same colour in row 1 and row 5. Consider the corners (1,1), (1,5), (5,1), (5,5). Then (5,1) matches (1,1) and (5,5) matches (1,5). Also, from the 2 by 2 squares (k = 2): corners (1,c), (1,c+2), (3,c), (3,c+2) have rows 1 and 3 of the same parity, so for the square to be balanced we need colour(1,c) ≠ colour(1,c+2). Apply this at c = 1 and c = 3: colour(1,1) ≠ colour(1,3) ≠ colour(1,5), so colour(1,1) = colour(1,5). Then all four corners of the big square (k = 4) have the same colour. That is 4 of one colour, contradicting our assumption.

The second case is the same with rows and columns swapped. So some square has at least 3 corners of the same colour. ∎` },

  "2018-11": { src: "own", text: `BIG IDEA: Write 2n just above a perfect square and use the fact that k ≡ −1 modulo (k + 1).

Step 1 - Name the floor. Let k = ⌊√(2n)⌋. Then k² ≤ 2n < (k + 1)², so we can write 2n = k² + r with 0 ≤ r ≤ 2k.

Step 2 - Use the divisibility. We need (k + 1) to divide 2n = k² + r. Since k ≡ −1 (mod k + 1), we have k² ≡ 1. So we need 1 + r ≡ 0 (mod k + 1), i.e. r ≡ −1 ≡ k (mod k + 1).

Step 3 - Which r works? The numbers between 0 and 2k that are ≡ k (mod k + 1) are k, and k + (k + 1) = 2k + 1, which is too big. So r = k and
2n = k² + k = k(k + 1).

Step 4 - Check it works. n = k(k + 1)/2 is always a whole number. Also k² ≤ k² + k < (k + 1)², so ⌊√(2n)⌋ = k indeed, and 1 + k divides k(k + 1). ✓

Answer: n is any triangular number, n = k(k + 1)/2 for k = 1, 2, 3, ... (so n = 1, 3, 6, 10, 15, ...).` },

  "2024-31": { src: "own", text: `BIG IDEA: The last sum is always 1 + 2 + ... + n, which is easy to test. For even n, pair up the numbers as (2,1), (4,3), ... and check each partial sum.

Part (a) - n odd.
The condition for k = n says a1 + ... + an is NOT divisible by n. But the a's are just 1, 2, ..., n in some order, so their sum is n(n+1)/2 = n · (n+1)/2. When n is odd, (n+1)/2 is a whole number, so this sum IS divisible by n. Contradiction, so no nice rearrangement exists.

Part (b) - n even.
Use the order 2, 1, 4, 3, 6, 5, ..., n, n−1. We check every k from 2 to n.

k even: the first k terms are the pairs (2,1), (4,3), ..., (k, k−1), which together are 1, 2, ..., k. The sum is k(k+1)/2 = (k/2)(k+1). If this were divisible by k, then (k+1)/2 would be a whole number. But k + 1 is odd, so it is not. Not divisible. ✓

k odd (k ≥ 3): the first k − 1 terms are complete pairs, summing to 1 + 2 + ... + (k−1) = k(k−1)/2. The k-th term is k + 1 (the first number of the next pair). Total: k(k−1)/2 + (k+1) = k(k+1)/2 + 1. Since k is odd, k(k+1)/2 = k · (k+1)/2 is a multiple of k. So the sum leaves remainder 1 when divided by k, and since k > 1 it is not divisible. ✓

So 2, 1, 4, 3, ..., n, n−1 is a nice rearrangement.` },

  "2024-32": { src: "own", text: `BIG IDEA: For large n, the remainders for divisors bigger than n/2 already add up to more than n − 1. Then check the few small n by hand.

Step 1 - Remainders for big divisors. If n/2 < i ≤ n, then n goes into i once, so the remainder is n − i. These divisors are i = ⌊n/2⌋ + 1, ..., n. There are h = ⌈n/2⌉ of them, and their remainders are 0, 1, 2, ..., h − 1. Their sum is h(h − 1)/2.

Step 2 - Compare with n − 1. All remainders are at least 0, so R(n) ≥ h(h − 1)/2. If R(n) = n − 1 we would need h(h − 1)/2 ≤ n − 1.
- n = 9: h = 5, and 5·4/2 = 10 > 8. Fails.
- n = 10: h = 5, and 10 > 9. Fails.
- n ≥ 11: h ≥ n/2, so h(h − 1)/2 ≥ n(n − 2)/8, and n(n − 2)/8 > n − 1 as soon as n² − 10n + 8 > 0, which is true for n ≥ 10. Fails.
So n ≤ 8.

Step 3 - Check n = 1 to 8 directly.
n = 1: R = 0 = n − 1 ✓
n = 2: 0+0 = 0, need 1 ✗
n = 3: 0+1+0 = 1, need 2 ✗
n = 4: 0+0+1+0 = 1, need 3 ✗
n = 5: 0+1+2+1+0 = 4 = n − 1 ✓
n = 6: 0+0+0+2+1+0 = 3, need 5 ✗
n = 7: 0+1+1+3+2+1+0 = 8, need 6 ✗
n = 8: 0+0+2+0+3+2+1+0 = 8, need 7 ✗

Answer: n = 1 and n = 5.` },

  "2024-33": { src: "own", text: `BIG IDEA: Everything lies on the axis AD. Reflect H over BC to get a point M on the circumcircle, find R-multiples for every length on the axis, and show GI equals the inradius.

Step 1 - The setting. Since AB = AC, the line AD is the altitude, median, angle bisector and perpendicular bisector of BC. So the points A, O, G, H, I (incentre) all lie on AD. D is the midpoint of BC and is also the point where the incircle touches BC, so ID = r (the inradius).

Step 2 - Reflect H over BC. Let M be the reflection of H in BC. A standard fact: this reflection lies on the circumcircle. Since M is on line AD, it is the point where AD meets the circle again, so M is the midpoint of arc BC not containing A, and AM is a diameter (it passes through O). Also DM = HD.

Step 3 - M is the centre of circle BIC. ∠MBI = ∠MBC + ∠CBI = ∠MAC + B/2 = A/2 + B/2. In triangle ABI the exterior angle at I is ∠MIB = A/2 + B/2. So MB = MI. Also MB = MC, so MI = MB = MC.

Step 4 - Use the given ratio. Let R be the circumradius, OD = x, HD = y. Then x = (23/2)y. Also R = OM = OD + DM = x + y = (25/2)y, so y = 2R/25.

Step 5 - Lengths along AD. AD = AM − DM = 2R − y = 48R/25. G divides AD with AG : GD = 2 : 1, so GD = AD/3 = 16R/25.

Step 6 - Find MI. Triangles MDB and MBA are similar (they share the angle at M, and ∠MBD = ∠MAB = A/2). So MB² = MD · MA = y · 2R = 4R²/25. Since MI = MB, MI = 2R/5 = 10R/25.

Step 7 - Find ID and GI. I lies between D and M... so ID = MI − MD = 10R/25 − 2R/25 = 8R/25. Then G is above D at height 16R/25 and I is above D at height 8R/25, so GI = 16R/25 − 8R/25 = 8R/25 = ID = r.

The distance from I to G equals the inradius, so G lies on the incircle. ∎` },

  "2024-34": { src: "own", text: `BIG IDEA: Assume the opposite (all pairs are far apart), then the four numbers must be so spread out that their squares add to more than 1.

Step 1 - Assume the opposite. Suppose every pair satisfies |ai − aj| > 1/√5. Rename the numbers in increasing order y < u < v < x.

Step 2 - The gaps add up. The gaps y→u, u→v, v→x are each more than 1/√5, so x − y > 3/√5, and v − u > 1/√5.

Step 3 - A handy inequality. For any numbers p and q, 2(p² + q²) − (p − q)² = (p + q)² ≥ 0, so p² + q² ≥ (p − q)²/2.

Step 4 - Apply it twice. Group the squares as (x² + y²) + (u² + v²):
1 = x² + y² + u² + v² ≥ (x − y)²/2 + (u − v)²/2 > (9/5)/2 + (1/5)/2 = 1.
That says 1 > 1, a contradiction.

So at least one pair has (ai − aj)² ≤ 1/5. ∎` },

  "2024-35": { src: "own", text: `BIG IDEA: A cyclic trapezium is isosceles. Turn the claim into a ratio, then show two isosceles triangles are similar.

Step 1 - Simplify the shape. AB ∥ CD and ABCD is cyclic, so it is an isosceles trapezium: AD = BC and the diagonals are equal, AC = BD. The claim becomes OB · (AB + CD) = OL · 2AC.

Step 2 - Introduce the other midpoint. Let K be the foot of the perpendicular from O to BC. A perpendicular from the centre to a chord hits its midpoint, so L is the midpoint of AD and K is the midpoint of BC. The segment LK joins the midpoints of the two legs, so LK = (AB + CD)/2. Also OB = OA (radii). Putting these in, the claim is equivalent to OA / AC = OL / LK. We prove this with similar triangles.

Step 3 - Angles. ∠AOL is half of the central angle ∠AOD, so ∠AOL = ∠ACD (the inscribed angle on the same arc AD). In an isosceles trapezium, ∠ACD = ∠BDC. And ∠BDC = ∠COK for the same reason (half of the central angle ∠BOC). So ∠AOL = ∠COK.

Step 4 - Add the common part. ∠AOC = ∠AOB + ∠BOK + ∠KOC and ∠LOK = ∠LOA + ∠AOB + ∠BOK. Since ∠LOA = ∠KOC, we get ∠AOC = ∠LOK.

Step 5 - Similar triangles. AD = BC, so the chords are the same distance from O: OL = OK. So triangle LOK is isosceles (OL = OK) and triangle AOC is isosceles (OA = OC), with equal angles at O. Hence they are similar, and OA / AC = OL / LK. This is what we wanted. ∎` },

  "2024-36": { src: "own", text: `BIG IDEA: Each step of a chain multiplies by 2^b · 3^c. Because 3 appears only once in 2^m · 3, exactly one step "brings in the 3". Count the chains by looking at the steps before and after that special step.

Step 1 - Describe a chain by its steps. In a chain 1 = a1 < a2 < ... < ak = n, each ratio a(i+1)/a(i) is a divisor of n bigger than 1, so it equals 2^b · 3^c. Adding up all the exponents, the b's total m and the c's total 1.

Step 2 - The special step. Since the c's add up to 1 and each c is 0 or 1, exactly one step has c = 1; call it the 3-step. Every other step has c = 0, so it multiplies by 2^b and needs b ≥ 1 (to increase). The 3-step can have b = 0 or more.

Step 3 - Compositions. A composition of t is a way to write t as an ordered sum of positive whole numbers. Let C(t) be the number of them: C(0) = 1 (the empty sum) and C(t) = 2^(t−1) for t ≥ 1 (each of the t − 1 gaps in a row of t dots is cut or not).

Step 4 - Count the chains. Say the steps before the 3-step use powers of 2 totalling x, the steps after use y, and the 3-step uses b0 = m − x − y ≥ 0. A chain is determined by choosing a composition of x, a composition of y, and (x, y). So
f(2^m · 3) = sum over x + y ≤ m of C(x) · C(y).

Step 5 - Add by total t = x + y. Let S(t) = sum over x + y = t of C(x)C(y). For t = 0, S = 1. For t ≥ 1: x = 0 or y = 0 give 2 · 2^(t−1) = 2^t, and x from 1 to t − 1 gives (t − 1) · 2^(t−2). So S(t) = 2^t + (t − 1) 2^(t−2) = 2^(t−2)(t + 3).
Therefore f(2^m · 3) = 1 + the sum over t = 1..m of 2^(t−2)(t + 3).

Step 6 - Show it equals 2^(m−1)(m + 2) by induction.
Base m = 1: 1 + 2^(−1)·4 = 3 = 2^0 · 3 ✓.
Step: going from m − 1 to m adds 2^(m−2)(m + 3). And 2^(m−1)(m + 2) − 2^(m−2)(m + 1) = 2^(m−2)(2m + 4 − m − 1) = 2^(m−2)(m + 3) ✓.

So f(2^m · 3) = 2^(m−1)(m + 2). ∎` },

  "2025-37": { src: "own", text: `BIG IDEA: Parallel lines never meet and lines through one point share a single meeting point. Mix these ideas, then use a triangle with its midlines and medians for part (b).

Part (a)(i) - n lines, exactly n − 1 intersection points.
Take n − 1 parallel lines and one line crossing all of them. The crossing line meets each parallel line once, at n − 1 different points. The parallel lines never meet each other. Total: n − 1 points.

Part (a)(ii) - n lines, exactly n intersection points.
Take n − 1 lines through a single point P, and one more line that does not pass through P and is not parallel to any of them. The extra line meets each of the n − 1 lines at a different point, giving n − 1 new points. Together with P that makes n points.

Part (b) - n + 1 points for n = 9 and n = 8.
Start with any triangle ABC. Let D, E, F be the midpoints of BC, CA, AB.
Take these 9 lines: the 3 side lines (AB, BC, CA), the 3 midlines (DE, EF, FD), and the 3 medians (AD, BE, CF).
Count the intersection points:
- The vertices A, B, C (each has two sides and a median meeting there): 3 points.
- The midpoints D, E, F (each has a side, two midlines and a median meeting there): 3 points.
- The centroid G, where the three medians meet: 1 point.
- Each median also cuts the opposite midline at that midline's midpoint (AD meets EF, BE meets FD, CF meets DE): 3 points.
- A midline is parallel to the opposite side (DE ∥ AB, etc.), so those pairs never meet.
Total: 3 + 3 + 1 + 3 = 10 = n + 1 points for n = 9. ✓

For n = 8, remove one median, say AD. This deletes only the point where AD met EF; the points A, D and G still have at least two lines through them. So 8 lines and 10 − 1 = 9 = n + 1 points. ✓` },

  "2025-38": { src: "own", text: `BIG IDEA: Turn the equal fractions into two relations: a sum relation (by adding) and a product relation (by multiplying). The product relation gives (abc)² = 8.

Step 1 - Clear denominators. From a + 2/b = b + 2/c, multiply both sides by bc:
abc + 2c = b²c + 2b.   (1)
In the same way, from b + 2/c = c + 2/a (multiply by ca) and c + 2/a = a + 2/b (multiply by ab):
abc + 2a = c²a + 2c.   (2)
abc + 2b = a²b + 2a.   (3)

Step 2 - Add the three equations. The left side is 3abc + 2(a + b + c). The right side is (a²b + b²c + c²a) + 2(a + b + c). Cancel the common 2(a + b + c):
a²b + b²c + c²a = 3abc.   (★)

Step 3 - Rearrange each equation differently. Equation (1): abc − b²c = 2b − 2c, which says bc(a − b) = 2(b − c). Likewise (2) gives ca(b − c) = 2(c − a), and (3) gives ab(c − a) = 2(a − b).

Step 4 - Multiply these three together.
(bc)(ca)(ab) · (a − b)(b − c)(c − a) = 8 · (b − c)(c − a)(a − b).
Since a, b, c are distinct, (a − b)(b − c)(c − a) ≠ 0 and we can cancel it: (abc)² = 8, so |abc| = 2√2.

Step 5 - Finish. By (★), |a²b + b²c + c²a| = 3|abc| = 6√2.

(Such numbers really exist, so the value is attained: for example, any x ≠ −√2 gives the triple x, −2/(x + √2), −(√2·x + 2)/x.)

Answer: 6√2.` },

  "2025-39": { src: "own", text: `BIG IDEA: Show that AQ = QR = RB by chasing angles. The concyclic conditions turn a central angle (at O1 or O2) into an angle on the line ℓ.

Setup. The points P, Q, R, S lie on ℓ in that order.

Step 1 - Show AQ = QR.
(i) Look at triangle AQR. The angle ∠AQP is an exterior angle at Q, so ∠AQP = ∠QAR + ∠ARQ.
(ii) A, P, Q, O1 are concyclic, so ∠AQP = ∠AO1P (angles standing on the same chord AP).
(iii) In circle Ω, the central angle ∠AO1P is twice the inscribed angle ∠ARP at R, and ∠ARP = ∠ARQ because Q lies on segment PR. So ∠AO1P = 2∠ARQ.
(iv) Combine: ∠QAR + ∠ARQ = 2∠ARQ, so ∠QAR = ∠ARQ. In triangle AQR two angles are equal, so AQ = QR.

Step 2 - Show QR = RB (the mirror argument).
(i) In triangle BQR, ∠BRS is an exterior angle at R, so ∠BRS = ∠BQR + ∠QBR.
(ii) B, R, S, O2 are concyclic, so ∠BRS = ∠BO2S.
(iii) In circle Γ, the central angle ∠BO2S is twice the inscribed angle ∠BQS = ∠BQR (R lies between Q and S).
(iv) So ∠BQR + ∠QBR = 2∠BQR, hence ∠QBR = ∠BQR and RQ = RB.

Step 3 - Conclude. AQ = QR = RB, so AQ = BR. ∎` },

  "2025-40": { src: "own", text: `BIG IDEA: Write x and y as fractions in lowest terms, show the products of tops and bottoms must match, and then reduce the equation modulo 3, since 2025 is a multiple of 3.

Step 1 - Set up. Suppose x = p/q and y = r/s with p, q, r, s positive integers, gcd(p, q) = 1 and gcd(r, s) = 1. Then
x + 1/x = (p² + q²)/(pq) and y + 1/y = (r² + s²)/(rs), so the equation becomes
rs(p² + q²) + pq(r² + s²) = 2025·pqrs.   (1)

Step 2 - Show pq = rs. From (1), pq divides rs(p² + q²). Now p² + q² shares no prime factor with pq (a prime dividing p would divide q², but gcd(p, q) = 1; the same for q). So pq divides rs. In the same way, rs divides pq. Both are positive, so pq = rs.

Step 3 - Simplify. Replace rs by pq in the first term and pq by rs in the second: the left side of (1) is pq(p² + q²) + pq(r² + s²). Divide (1) by pq:
p² + q² + r² + s² = 2025·pq.   (2)

Step 4 - Look modulo 3. The right side of (2) is divisible by 3 (as 2025 = 3 · 675). Squares mod 3 are 0 (when the number is a multiple of 3) or 1 (otherwise).
Which of p, q, r, s are multiples of 3? p and q cannot both be (they are coprime), nor r and s. If 3 divides p, then 3 divides pq = rs, so 3 divides exactly one of r, s. So either none of the four are multiples of 3, or exactly two are (one from each pair).
- None: the left side is 1 + 1 + 1 + 1 = 4 ≡ 1 (mod 3).
- Exactly two: it is 0 + 1 + 0 + 1 = 2 (mod 3).
Neither is 0 mod 3, but the right side is. Contradiction. So no positive rational x, y exist. ∎` },

  "2025-41": { src: "own", text: `BIG IDEA: Reflect everything in BC. The reflection of H lands on the circle, and a distance condition forces the reflection of M to be the circle's centre, which makes the angle at A easy.

Step 1 - Two facts. Let R be the circumradius.
Fact A: the reflection H′ of H in BC lies on Ω. (Reason: ∠BHC = 180° − A, so ∠BH′C = 180° − A as well, and H′ is on the opposite side of BC from A, so ABH′C is cyclic.)
Fact B: M lies on the perpendicular bisector of BC, and so does its reflection M′.

Step 2 - Use MH = R. Reflection preserves distances, so M′H′ = MH = R.

Step 3 - Pin down M′. Points that lie on the perpendicular bisector of BC and at distance R from H′: the circle with centre H′ and radius R meets that line in two points. One is O, since OH′ = R (H′ is on Ω). The other is the mirror image of O in the line through H′ parallel to BC. Where are they?
H is inside the acute triangle, on the same side of BC as A, so H′ is on the other side of BC, the side of M. The point M′ is on A's side of BC. In an acute triangle O is on A's side too. The other intersection point is even further away from A's side than H′, so it is on M's side. So the only point on A's side satisfying the conditions is O. Hence M′ = O.

Step 4 - Read off the angle. M is the reflection of the centre O in BC. So triangle BMC is the mirror image of triangle BOC, and ∠BMC = ∠BOC = 2∠BAC (central angle). But M is on the arc BC opposite A, so ABMC is cyclic and ∠BMC = 180° − ∠BAC. So 180° − ∠BAC = 2∠BAC, giving 3∠BAC = 180°, i.e. ∠BAC = 60°. ∎

(The condition that the triangle is acute was used in Step 3, and it matters: an obtuse triangle can give MH = R without the angle being 60°.)` },

  "2025-42": { src: "own", text: `BIG IDEA: If no two of p(0), p(1), ..., p(n−1) agree mod n, then p acts like a "one-to-one" map on remainders, and then repeating p can never revisit a remainder without going back through 0. A pigeonhole argument on the orbit of 0 then gives a contradiction.

Step 1 - Assume the opposite. Suppose there are no 0 ≤ a < b ≤ n − 1 with n | p(b) − p(a). So p(0), p(1), ..., p(n−1) all have different remainders mod n.

Step 2 - p respects remainders. For integers x, y with x ≡ y (mod n), we have p(x) ≡ p(y) (mod n), because p has integer coefficients. So the remainder of p(x) depends only on the remainder of x. Combined with Step 1, this gives the key property:
(K) if p(x) ≡ p(y) (mod n) then x ≡ y (mod n).
(If x, y had different remainders, they would be among 0, ..., n−1 and p(x), p(y) would have different remainders.)

Step 3 - Repeat it. Writing p^m for applying p m times, (K) used over and over gives: if p^m(x) ≡ p^m(y) (mod n) then x ≡ y (mod n).

Step 4 - Pigeonhole. Look at the n + 1 numbers p^1(0), p^2(0), ..., p^(n+1)(0). There are only n possible remainders mod n, so two of them match: p^l(0) ≡ p^k(0) (mod n) with 1 ≤ k < l ≤ n + 1.

Step 5 - Contradiction. Put x = p^(l−k)(0). Then p^k(x) = p^l(0) ≡ p^k(0). By Step 3 (with the m = k version), x ≡ 0 (mod n), i.e. n divides p^(l−k)(0), where l − k ≥ 1. This contradicts the assumption that no term of the sequence p(0), p(p(0)), ... is divisible by n.

So some a < b in {0, ..., n−1} satisfy n | p(b) − p(a). ∎` },

  "2025-43": { src: "own", text: `BIG IDEA: Add all four equations. The identity ab − a − b + 1 = (a − 1)(b − 1) turns the sum into a sum of four products, each at least 1, and the total is only 4.

Step 1 - Case: some a_i = 0.
The equations don't change if we swap a1 with a2, swap a3 with a4, and so on, or shift the pairs around the cycle. So we can assume a8 = 0. Then a7·a8 = 0 = a1 + a2, so a1 = a2 = 0. Then a3 + a4 = a1a2 = 0, so a3 = a4 = 0. Then a5 + a6 = a3a4 = 0, so a5 = a6 = 0. Finally a7 + a8 = a5a6 = 0 gives a7 = 0. So all a_i = 0. This works (0·0 = 0 + 0).

Step 2 - Case: no a_i is 0. Since no a_i equals 1 either, every a_i ≥ 2.
Add the four equations:
a1a2 + a3a4 + a5a6 + a7a8 = (a3 + a4) + (a5 + a6) + (a7 + a8) + (a1 + a2).
The right side is just a1 + a2 + ... + a8. So
(a1a2 − a1 − a2) + (a3a4 − a3 − a4) + (a5a6 − a5 − a6) + (a7a8 − a7 − a8) = 0.

Step 3 - Use the identity. ab − a − b = (a − 1)(b − 1) − 1. So the equation says
(a1 − 1)(a2 − 1) + (a3 − 1)(a4 − 1) + (a5 − 1)(a6 − 1) + (a7 − 1)(a8 − 1) = 4.

Step 4 - Squeeze. Each a_i ≥ 2 means each factor a_i − 1 ≥ 1, so each of the four products is at least 1. Four products, each ≥ 1, adding to exactly 4: each equals 1. So every a_i − 1 = 1, i.e. every a_i = 2.
Check: 2·2 = 2 + 2 ✓.

Answer: either all a_i = 0, or all a_i = 2.` },

  "2025-44": { src: "own", text: `BIG IDEA: Compare each term with a straight-line bound, then use abc = 1 and AM-GM to show what's left over is non-negative.

Step 1 - Rewrite the difference. The inequality says (a² + b² + c²) − (2a²/(a³+1) + 2b²/(b³+1) + 2c²/(c³+1)) ≥ 0. For one variable,
a² − 2a²/(a³ + 1) = a²(a³ − 1)/(a³ + 1).
So we must show the sum of a²(a³ − 1)/(a³ + 1) over a, b, c is at least 0.

Step 2 - A one-variable bound. We claim, for every a > 0,
a²(a³ − 1)/(a³ + 1) ≥ (3/2)(a − 1).
Check it by computing the difference:
a²(a³ − 1)/(a³ + 1) − (3/2)(a − 1) = (a − 1)·(2a⁴ − a³ + 2a² − 3) / (2(a³ + 1)).
The quartic 2a⁴ − a³ + 2a² − 3 equals 0 at a = 1, and dividing by (a − 1) gives 2a³ + a² + 3a + 3. So the difference is
(a − 1)²(2a³ + a² + 3a + 3) / (2(a³ + 1)),
which is ≥ 0 because every factor is non-negative for a > 0. ✓

Step 3 - Add up. Applying Step 2 to a, b, c:
(a² + b² + c²) − (the left side of the problem) ≥ (3/2)(a + b + c − 3).

Step 4 - AM-GM. Since abc = 1, a + b + c ≥ 3·(abc)^(1/3) = 3. So a + b + c − 3 ≥ 0, and therefore the left side is at most a² + b² + c². ∎ (Equality at a = b = c = 1.)` },

  "2025-45": { src: "own", text: `BIG IDEA: I is the circumcentre of triangle BED. That makes I, M and the midpoint of ED all lie on one line parallel to CD, and then the angles can be chased.

Step 1 - Who is I? Since AB = AE, the bisector of ∠EAB is the perpendicular bisector of BE. Since CB = CD, the bisector of ∠DCB is the perpendicular bisector of BD. These two lines meet at I, so I is equidistant from B, E, D: I is the circumcentre of triangle BED.

Step 2 - Where is M? Because ∠AED = ∠CDE = 90°, the lines AE and CD are both perpendicular to ED, so AE ∥ CD and AEDC is a trapezium with legs ED and AC. Let N be the midpoint of ED. The perpendicular bisector of ED passes through N, is parallel to AE and CD, and (being the "midline" of the trapezium) passes through the midpoint M of the other leg AC. It also passes through I (circumcentre of BED). So I, M, N are collinear, and the line IM is parallel to CD.

Step 3 - Chase angles. Let F be the midpoint of BD and G the midpoint of BE.
(a) MI ∥ CD gives ∠MIC = ∠ICD (alternate angles).
(b) CB = CD means CF ⟂ BD, and I lies on CF. In right triangle CFD, ∠ICD = ∠FCD = 90° − ∠CDF.
(c) ∠CDE = 90°, so ∠CDF + ∠FDE = 90°, hence 90° − ∠CDF = ∠FDE = ∠BDE.
(d) In the circle centred at I, ∠BDE is an inscribed angle on chord BE, so ∠BIE = 2∠BDE. The line IG is the perpendicular bisector of BE, so it bisects ∠BIE: ∠BIG = ∠BDE.
(e) A also lies on the perpendicular bisector of BE, so line IG passes through A, and ∠BIG = ∠BIA.

Step 4 - Join the chain. ∠MIC = ∠ICD = ∠BDE = ∠BIG = ∠BIA = ∠AIB. ∎` },

  "2025-46": { src: "own", text: `BIG IDEA: Every path has exactly two "climbing" moves (U or D) and the rest are R's. Sort the paths by which two climbing moves they use, and count the ways to place them.

Step 1 - Why two climbing moves? The frog must go up by 2 in total. Each U or D raises the height by 1, and R does not, so there are exactly two climbing moves. The other moves are R's. Also, only D and R move right, so the number of R's is n minus the number of D's.

Step 2 - Case 1: two U's. There are n R's and two U's, and the two U's must not be next to each other (no UU). Line up the n R's. There are n + 1 gaps (before, between, after). Put each U in a different gap: C(n + 1, 2) ways.

Step 3 - Case 2: two D's. Now there are n − 2 R's (two D's give 2 steps to the right) and two D's with no DD. Line up the n − 2 R's, which has n − 1 gaps; choose 2 different gaps: C(n − 1, 2) ways. (If n = 1 this is 0, which is correct.)

Step 4 - Case 3: one U and one D. There are n − 1 R's, one U and one D, for n + 1 moves in total. There is no restriction (UU and DD cannot occur). Choose the position of U among n + 1 places, then the position of D among the remaining n places: (n + 1)·n ways.

Step 5 - Add.
C(n+1, 2) + C(n−1, 2) + n(n+1) = [n(n+1) + (n−1)(n−2)]/2 + n(n+1) = (n² − n + 1) + (n² + n) = 2n² + 1.

Check n = 1: formula gives 3, and the paths are UD, DU, URU ✓.

Answer: 2n² + 1.` },

  "2025-47": { src: "own", text: `BIG IDEA: Show that X, Y and the midpoint R of BC are the feet of the perpendiculars from one point of the circumcircle onto the three side lines. By the Simson line theorem, such feet are collinear, so XY passes through R.

Step 1 - The special point. Let O be the circumcentre and let O′ be the reflection of O in BC. Since ∠BAC = 60°, the central angle ∠BOC = 120°, so ∠BO′C = 120° too. The triangle is acute, so O is on A's side of BC and O′ is on the other side, where ∠BO′C + ∠BAC = 180°. So A, B, O′, C are concyclic: O′ lies on the circumcircle.

Step 2 - R is a midpoint. The line OO′ is perpendicular to BC and meets BC at the midpoint R of BC (O is on the perpendicular bisector of BC). So R is the midpoint of OO′, and R is also the foot of the perpendicular from O′ to BC.

Step 3 - Project onto AB. Perpendicular projection onto a line sends midpoints to midpoints.
- The foot of O on AB is M, the midpoint of AB.
- The foot of R on AB is the midpoint P of BF. (CF ⟂ AB, and the line through R, the midpoint of BC, parallel to CF cuts BF at its midpoint.)
- Since R is the midpoint of OO′, its foot P is the midpoint of the feet of O and O′. So the foot of O′ on AB is the reflection of M in P.
That reflection of M in the midpoint of BF is exactly X. So X is the foot of O′ on AB.

Step 4 - The same for Y. By the same argument with C, E, N, the point Y is the foot of the perpendicular from O′ onto AC.

Step 5 - Simson line. X, Y, R are the feet from O′ to AB, AC, BC, and O′ is on the circumcircle. By the Simson line theorem they are collinear. So line XY passes through R, the midpoint of BC: XY bisects BC. ∎` },

  "2025-48": { src: "own", text: `BIG IDEA: Show s(a_n²) = s(a_(n−1)²) + 2n. Then, since s(a_0²) = 7, adding 2·1 + 2·2 + ... + 2n gives n² + n + 7.

Notation. Let L = 10^(2^n), A = a_(n−1), and b = 2A. Then a_n = L·A − 1. All a_k end in digit 9, so every a_k² ends in digit 1.

Step 1 - The digits of b_k = 2a_k. We have b_0 = 98, and b_k = 10^(2^k)·b_(k−1) − 2. Now b_(k−1) ends in 8, so 10^(2^k)·b_(k−1) ends in 8 followed by 2^k zeros. Subtracting 2 turns "8 000...0" into "7 999...98". So b_k is b_(k−1) with its last 8 changed to 7, followed by 2^k − 1 nines and then an 8.
Conclusions: b_k has 2^(k+1) digits (the length grows by 2^k each time, starting from 2), and its digits are k sevens, then one 8 at the end, and nines everywhere else. (Check: 2·4899 = 9798 ✓.)

Step 2 - Expand the square. a_n² = (LA − 1)² = L²A² − 2LA + 1 = L·(L·A² − b) + 1.
So we need the digit sum of L·A² − b. Since b has exactly 2^n digits (it is b_(n−1)), b < L. Write
L·A² − b = L·(A² − 1) + (L − b).
Here L − b is between 0 and L − 1, so it fits in exactly 2^n digit places (with leading zeros allowed). Therefore the digits of L·A² − b are the digits of A² − 1 followed by the 2^n digits of L − b, and the digit sums just add:
s(L·A² − b) = s(A² − 1) + s(L − b).
Multiplying by L (adding zeros) and adding 1 only appends one digit 1:
s(a_n²) = 1 + s(A² − 1) + s(L − b).

Step 3 - Compute s(A² − 1). A² ends in 1, so subtracting 1 only changes that last digit from 1 to 0: s(A² − 1) = s(A²) − 1.

Step 4 - Compute s(L − b). Write L − b = (L − 1) − (b − 1). L − 1 is 2^n nines, so subtracting b − 1 digit by digit never needs a borrow, and the digits of the answer are 9 − (digits of b − 1). So s(L − b) = 9·2^n − s(b − 1). Now b = b_(n−1) has n − 1 sevens, an 8 at the end, and nines elsewhere (Step 1). Subtracting 1 turns that final 8 into a 7, so b − 1 has n sevens and 2^n − n nines. Therefore s(b − 1) = 7n + 9(2^n − n), and
s(L − b) = 9·2^n − 7n − 9·2^n + 9n = 2n.

Step 5 - Put it together. s(a_n²) = 1 + (s(A²) − 1) + 2n = s(a_(n−1)²) + 2n.
Since a_0² = 49² = 2401 has digit sum 7, we get
s(a_n²) = 7 + 2(1 + 2 + ... + n) = 7 + n(n + 1) = n² + n + 7. ∎

(Check n = 1: a_1 = 4899, a_1² = 24000201, digit sum 9 = 1 + 1 + 7 ✓.)` },

  "2023-19": { src: "own", text: `BIG IDEA: Squares leave only a few remainders mod 4 and mod 3. Use that to show 12 always divides abcd, then find one example showing nothing bigger works.

Step 1 - Show 4 divides abcd. Squares are 0 or 1 mod 4 (even² ≡ 0, odd² ≡ 1). If two or more of a, b, c were odd, then a² + b² + c² would be ≡ 2 or 3 (mod 4), which can't equal the square d². So at most one of a, b, c is odd, meaning at least two are even, and 4 divides abc, hence abcd.

Step 2 - Show 3 divides abcd. Squares are 0 or 1 mod 3. If none of a, b, c is a multiple of 3, then each square is 1 mod 3 and d² = a² + b² + c² ≡ 3 ≡ 0 (mod 3). So 3 divides d. Either way, 3 divides abcd.

Step 3 - Combine. 4 and 3 are coprime, so 12 divides abcd for every element of S.

Step 4 - Nothing bigger works. (1, 2, 2, 3) is in S because 1 + 4 + 4 = 9, and abcd = 12. So m must divide 12. Since 12 itself works, the largest m is 12.

Answer: m = 12.` },

  "2023-20": { src: "own", text: `BIG IDEA: Reflect C in AB to get a point P on the full circle. The "equal inclination" condition puts P, E, D on one line. Then an isosceles triangle gives the angle, and the circle's centre turns out to be the fixed point.

Setup. Let Ω be the full circle with diameter AB and centre O. Let P be the reflection of C in line AB; since C is on Ω, so is P. Let K be the foot of the perpendicular from C to AB.

Step 1 - P, E, D are collinear. Reflecting in AB, ∠CEK = ∠PEK. The condition says CE and DE make equal angles with AB, so ∠DEB = ∠CEK = ∠PEK. The angles ∠PEK, ∠CEK and ∠CED then fill a straight angle at E (∠PEK + ∠CEK + ∠CED = 180°), so P, E, D lie on one line.

Part (a) - ∠CED is constant. E is on the axis AB, so EC = EP and triangle CEP is isosceles with equal angles ∠ECP = ∠EPC. Since D is on the extension of PE beyond E, ∠CED is an exterior angle of triangle CEP, so ∠CED = ∠ECP + ∠EPC = 2∠CPE = 2∠CPD. Now ∠CPD is an inscribed angle in Ω on the chord CD, which has constant length, so ∠CPD is constant. Therefore ∠CED is constant.

Part (b) - The fixed point is O. The central angle ∠COD is twice the inscribed angle ∠CPD, so ∠COD = 2∠CPD = ∠CED. The points E and O see the segment CD under the same angle (and lie on the same side of it), so O lies on the circumcircle of triangle CED. O is the centre of the semicircle, a fixed point. ∎` },

  "2023-21": { src: "own", text: `BIG IDEA: m and n are both perfect squares of digit sums, and digit sums are small. Squeeze m into a small range, then test a short list.

Step 1 - Rename. Let a = s(m) and b = s(n). The conditions say n = a² and m = b². Since m < n, we need b < a, and because s(m) = a means m = b² has digit sum a.

Step 2 - Squeeze the size of m. If m has k digits, then s(m) ≤ 9k, so n = s(m)² ≤ 81k². Also n > m ≥ 10^(k−1). So 10^(k−1) < 81k², which fails for k ≥ 5. So m ≤ 9999 and s(m) ≤ 36, giving n ≤ 1296. A number up to 1296 has digit sum at most 27, so m = s(n)² ≤ 729. Repeating: m ≤ 729 gives s(m) ≤ 24 (at 699), so n ≤ 576; then s(n) ≤ 22, so m ≤ 484; then s(m) ≤ 21, so n ≤ 441; then s(n) ≤ 21, so m ≤ 441. Hence b = √m ≤ 21.

Step 3 - Test b from 1 to 21. First use n > m, i.e. s(b²) > b (because n = s(b²)²). The digit sums s(b²) for b = 1, ..., 21 are: 1, 4, 9, 7, 7, 9, 13, 10, 9, 1, 4, 9, 16, 16, 9, 13, 19, 9, 10, 4, 9. The condition s(b²) > b leaves b = 2, 3, 4, 5, 6, 7, 8, 13, 14, 17.

Step 4 - Check s(n) = b for these. n = s(b²)² is, in order: 16, 81, 49, 49, 81, 169, 100, 256, 256, 361. Their digit sums are 7, 9, 13, 13, 9, 16, 1, 13, 13, 10. We need this to equal b. Only b = 13 matches (n = 256, s(256) = 13).

Step 5 - Conclude. b = 13 gives m = 169 and n = 256. Check: s(256)² = 13² = 169 ✓ and s(169)² = 16² = 256 ✓, and 169 < 256 ✓.

Answer: (m, n) = (169, 256).` },

  "2023-22": { src: "own", text: `BIG IDEA: Put the line l on the x-axis. Every one of the three midpoints turns out to have the same x-coordinate, so they sit on one vertical line.

Step 1 - Coordinates. Let l be the x-axis and let A, B, C, D have x-coordinates a < b < c < d.

Step 2 - Where the perpendicular bisectors are. The perpendicular bisector of AB is the vertical line x = (a + b)/2, so P and Q (which lie on it) have x-coordinate (a + b)/2. Likewise R and S lie on the vertical line x = (c + d)/2.

Step 3 - The two centres. O1 is the centre of Ω1, which passes through A and C, so O1 lies on the perpendicular bisector of AC: its x-coordinate is (a + c)/2. O2 is the centre of Ω2, which passes through B and D, so its x-coordinate is (b + d)/2.

Step 4 - The three midpoints. Looking only at x-coordinates:
- Midpoint of PR: ((a + b)/2 + (c + d)/2)/2 = (a + b + c + d)/4.
- Midpoint of QS: the same, since Q has the same x as P and S the same x as R: (a + b + c + d)/4.
- Midpoint of O1O2: ((a + c)/2 + (b + d)/2)/2 = (a + b + c + d)/4.

Step 5 - Conclude. All three midpoints lie on the vertical line x = (a + b + c + d)/4, so they are collinear. ∎` },

  "2023-23": { src: "own", text: `BIG IDEA: Show each square-root term is at most √a_i using AM-GM, then Cauchy-Schwarz squeezes the whole sum so that equality is forced.

Step 1 - Bound one term. Take a > 0. Apply AM-GM to the k numbers a^k (taken k − 1 times) and 1 (once):
((k − 1)a^k + 1)/k ≥ (a^(k(k−1)))^(1/k) = a^(k−1).
So (k − 1)a^k + 1 ≥ k·a^(k−1), and therefore
k·a^k / ((k − 1)a^k + 1) ≤ k·a^k / (k·a^(k−1)) = a.
Taking square roots, each term sqrt(k·a_i^k / ((k − 1)a_i^k + 1)) is at most √a_i.

Step 2 - Add up. Using the given condition,
n = (sum of the square-root terms) ≤ √a_1 + ... + √a_n.

Step 3 - Cauchy-Schwarz the other way. (√a_1 + ... + √a_n)² ≤ n·(a_1 + ... + a_n) = n·n = n², so √a_1 + ... + √a_n ≤ n.

Step 4 - Squeeze. Steps 2 and 3 give n ≤ Σ√a_i ≤ n, so everything is equal. In Cauchy-Schwarz, equality means all the √a_i are equal, and since the a_i sum to n, each a_i = 1.

Step 5 - Check. If every a_i = 1, each term is sqrt(k/((k − 1) + 1)) = 1, so the sum is n, and Σa_i = n ✓.

Answer: a_1 = a_2 = ... = a_n = 1.` },

  "2023-24": { src: "own", text: `BIG IDEA: Pigeonhole. Split the 16 grid points into small groups so that any 2 or 3 points from the same group make an isosceles right triangle (possibly together with one fixed blue point).

Label the grid like this (columns 1 to 4, rows 1 to 4):
A B C D
E F G H
I J K L
M N O P
The four central points are F, G, J, K. Three vertices of any square form an isosceles right triangle.

Case 1 - none of F, G, J, K is blue. The other 12 points split into three squares:
{A, D, P, M} (the big corner square), {B, H, O, I} (a tilted square) and {C, L, N, E} (another tilted square).
7 blue points in 3 groups means some group has at least 3 blue points, and any 3 vertices of a square form an isosceles right triangle. Done.

Case 2 - some central point is blue. Rotating or reflecting the grid, we may assume F is blue. Note that for each group below, any two of its points together with F make an isosceles right triangle. Check:
- {E, I, J} with F is a unit square. {A, B, E} with F is a unit square. {G, J, K} with F is a unit square. {H, N, P} with F is a square of side 2.
- D, O: FD = (2, −1) and FO = (1, 2) are perpendicular and equal in length (right angle at F). L, M: FL = (2, 1) and FM = (−1, 2) are perpendicular and equal in length.

Subcase 2.1 - F and C are both blue. Then A, B, G, H, K cannot be blue, since each makes an isosceles right triangle with F and C (for example right angle at F for A and K, at B for B, at G for G, at C for H). Of the remaining 9 points {D, E, I, J, L, M, N, O, P}, five are blue. Group them as {E, I, J}, {D, O}, {L, M}, {N, P}. 5 points in 4 groups, so some group has 2 blue points, which with F form an isosceles right triangle (for {N, P}: F, N, P has a right angle at N with legs 2 and 2).

Subcase 2.2 - F and I are both blue. This is the mirror image of 2.1 (reflect across the diagonal through A, F, K, P).

Subcase 2.3 - F blue but neither C nor I blue. The other 13 points (all except C, F, I) include 6 blue ones. Group them as {A, B, E}, {G, J, K}, {D, O}, {H, N, P}, {L, M}. 6 points in 5 groups, so some group has at least 2 blue points, which with F make an isosceles right triangle.

In every case there is an isosceles right triangle with all vertices blue. ∎` },

  "2023-25": { src: "own", text: `BIG IDEA: Call CN = x and CK = y, so CL = x + y. Then use the cosine rule three times to show all three sides of triangle KLN equal x² + xy + y².

Step 1 - The angles at C. CL bisects the 120° angle, so ∠NCL = ∠LCK = 60°.

Step 2 - Side NL. In triangle CNL, CN = x, CL = x + y and the angle between them is 60°, so
NL² = x² + (x + y)² − 2·x·(x + y)·cos 60° = x² + (x + y)² − x(x + y) = x² + xy + y².

Step 3 - Side KL. In triangle CKL, CK = y, CL = x + y and the angle between them is 60°, so
KL² = y² + (x + y)² − y(x + y) = x² + xy + y².

Step 4 - Side NK. In triangle CNK the angle at C is 120°, with cos 120° = −1/2, so
NK² = x² + y² − 2xy·cos 120° = x² + y² + xy.

Step 5 - Conclude. NL² = KL² = NK², so NL = KL = NK, and triangle KLN is equilateral. ∎` },

  "2023-26": { src: "own", text: `BIG IDEA: Write the four numbers around a middle value n, so 2p becomes a quadratic in n. Mod 3 pins n down, and then p − 7 factors nicely.

Step 1 - Set up. Let the four consecutive integers be n − 1, n, n + 1, n + 2. Their squares add to
(n − 1)² + n² + (n + 1)² + (n + 2)² = 4n² + 4n + 6.
So 2p = 4n² + 4n + 6, i.e. p = 2n(n + 1) + 3. Since n − 1 ≥ 1, we have n ≥ 2, so p > 3.

Step 2 - p is not a multiple of 3. p is a prime bigger than 3, so p is not divisible by 3. Check n modulo 3:
- n ≡ 0: n(n+1) ≡ 0, so p ≡ 3 ≡ 0 (mod 3). Not allowed.
- n ≡ 2: n(n+1) ≡ 2·3 ≡ 0, so p ≡ 0 (mod 3). Not allowed.
- n ≡ 1: this is the only possibility.
So n = 3k + 1 for some positive integer k.

Step 3 - Factor p − 7. p − 7 = 2n² + 2n − 4 = 2(n² + n − 2) = 2(n − 1)(n + 2).
With n = 3k + 1: n − 1 = 3k and n + 2 = 3k + 3 = 3(k + 1). So
p − 7 = 2 · 3k · 3(k + 1) = 18·k(k + 1).

Step 4 - Divisibility by 36. k(k + 1) is a product of two consecutive integers, so it is even. So 18·k(k + 1) is a multiple of 36. ∎` },

  "2023-27": { src: "own", text: `BIG IDEA: Multiply each equation by its variable. Then x·f(x) − abc has three known roots, and since it is a cubic, it must be a constant multiple of (x − a)(x − b)(x − c).

Step 1 - Multiply through. a·f(a) = a·bc = abc, b·f(b) = b·ca = abc, c·f(c) = c·ab = abc. So a·f(a) = b·f(b) = c·f(c) = abc.

Step 2 - A cubic with three roots. Let P(x) = x·f(x) − abc. Since f has degree 2, P has degree 3. And P(a) = P(b) = P(c) = 0. A cubic with three distinct roots a, b, c must be
P(x) = k(x − a)(x − b)(x − c) for some real number k.
So x·f(x) = k(x − a)(x − b)(x − c) + abc.

Step 3 - Find k. Put x = 0: 0 = k(−a)(−b)(−c) + abc = −k·abc + abc. If abc ≠ 0, this gives k = 1. (If one of a, b, c is 0, say a = 0, then f(b) = f(c) = 0, so f(x) = k′(x − b)(x − c); and f(0) = bc forces k′ = 1, which gives the same final formula.)

Step 4 - Find f. Divide x·f(x) = (x − a)(x − b)(x − c) + abc by x. Expanding, (x − a)(x − b)(x − c) = x³ − (a+b+c)x² + (ab+bc+ca)x − abc, so
x·f(x) = x³ − (a+b+c)x² + (ab+bc+ca)x, hence
f(x) = x² − (a+b+c)x + (ab+bc+ca).

Step 5 - Evaluate. With s = a + b + c: f(s) = s² − s·s + (ab + bc + ca).

Answer: f(a + b + c) = ab + bc + ca.` },

  "2023-28": { src: "own", text: `BIG IDEA: Count how many numbers each digit must appear in. This gives a lower bound on the total number of digits, hence on N, and then we find an example that meets it.

Step 1 - Each digit appears at least 3 times. Pick a digit, say 1. It must share a number with each of the other 7 digits. Each four-digit number that contains 1 has only 3 other digits, so it can pair 1 with at most 3 others. If 1 is in k of the numbers, then 3k ≥ 7, so k ≥ 3. The same holds for each of the 8 digits.

Step 2 - Count all digits. Each of the 8 digits appears in at least 3 numbers, so the total number of digit slots is at least 8 · 3 = 24. But N four-digit numbers have exactly 4N slots. So 4N ≥ 24, i.e. N ≥ 6.

Step 3 - Six numbers suffice. Take
1234, 1567, 1268, 2357, 3468, 4578.
Check all 28 pairs of digits:
- 1234 covers 12, 13, 14, 23, 24, 34.
- 1567 covers 15, 16, 17, 56, 57, 67.
- 1268 covers 18, 26, 28, 68 (and 12, 16 again).
- 2357 covers 25, 27, 35, 37 (and 23, 57 again).
- 3468 covers 36, 38, 46, 48 (and 34, 68 again).
- 4578 covers 45, 47, 58, 78 (and 48, 57 again).
That is all 28 pairs: 12, 13, 14, 15, 16, 17, 18, 23, 24, 25, 26, 27, 28, 34, 35, 36, 37, 38, 45, 46, 47, 48, 56, 57, 58, 67, 68, 78. ✓

Answer: the smallest possible N is 6.` },

  "2023-29": { src: "own", text: `BIG IDEA: Simplify T1 and T2 by grouping the four brackets in pairs. This turns T2/(2T1) into 3a² + b² + c², and then narrowing the possible a with inequalities and mod arguments leaves one triangle.

Step 1 - Simplify T1 and T2. Let u = a, v = b + c, w = b − c. Then a + b + c = u + v, a − b − c = u − v, a − b + c = u − w, a + b − c = u + w. So
T_n = [(u + v)^(2n) + (u − v)^(2n)] − [(u + w)^(2n) + (u − w)^(2n)].
For n = 1: T1 = 2(u² + v²) − 2(u² + w²) = 2(v² − w²) = 2·4bc = 8bc.
For n = 2: (u + v)⁴ + (u − v)⁴ = 2(u⁴ + 6u²v² + v⁴), so T2 = 2[6u²(v² − w²) + (v⁴ − w⁴)] = 2(v² − w²)(6u² + v² + w²) = 8bc · (6a² + 2b² + 2c²) = 16bc(3a² + b² + c²).
Therefore T2/(2T1) = 3a² + b² + c² = 2023.

Step 2 - Bound a. Since a > b > c, we have b² + c² < 2a², so 2023 < 5a², giving a² > 404.6, so a ≥ 21. Also 3a² < 2023 gives a² < 674.4, so a ≤ 25. So a ∈ {21, 22, 23, 24, 25}.

Step 3 - a must be odd. Squares are 0 or 1 mod 4. If a is even, 3a² ≡ 0 (mod 4) and b² + c² = 2023 − 3a² ≡ 3 (mod 4), but b² + c² can only be 0, 1 or 2 mod 4. So a is odd: a ∈ {21, 23, 25}.

Step 4 - Check a = 21. b² + c² = 2023 − 1323 = 700 = 7 · 100. Squares mod 7 are 0, 1, 2, 4, and the only way two squares add to 0 mod 7 is both 0. So 7 divides b and c, b = 7b1, c = 7c1, and 49(b1² + c1²) = 700, i.e. 7(b1² + c1²) = 100. Impossible, since 7 does not divide 100.

Step 5 - Check a = 25. b² + c² = 2023 − 1875 = 148. Try all squares: 148 − 144 = 4 works, and no other square c² ≤ 74 makes 148 − c² a square. So (b, c) = (12, 2). But then b + c = 14 < 25 = a, so no triangle exists.

Step 6 - Check a = 23. b² + c² = 2023 − 1587 = 436. The only way to write 436 as a sum of two squares is 20² + 6². So b = 20, c = 6, and 20 > 6, 23 > 20. The triangle inequality holds: 20 + 6 = 26 > 23. ✓

Step 7 - Perimeter. 23 + 20 + 6 = 49.

Answer: the only possible perimeter is 49.` },

  "2023-30": { src: "own", text: `BIG IDEA: Build a point T that lies on both circles. Then both centres lie on the perpendicular bisector of the common chord DT, and that line is parallel to AD.

Step 1 - Make T. On line QP choose the point T with DT ⟂ DA.

Step 2 - T lies on circle APD. PQ ⟂ AC, so ∠APT = 90°. Also ∠ADT = 90°. So P and D both see the segment AT at a right angle, which means A, P, D, T lie on the circle with diameter AT. This is the circumcircle of triangle APD.

Step 3 - The first centre. Since D and T are on circle APD, the centre of this circle lies on the perpendicular bisector ℓ of segment DT. Because DT ⟂ DA and ℓ ⟂ DT, the line ℓ is parallel to AD.

Step 4 - T also lies on circle BQD. ∠QBD = ∠CBD = ∠CAD = ∠PAD (angles standing on the arc CD in the cyclic quadrilateral). And ∠PAD = ∠PTD = ∠QTD, because in circle APDT both stand on the chord PD. So ∠QBD = ∠QTD: the points B and T see the segment QD at equal angles, so B, Q, D, T are concyclic.

Step 5 - The second centre. T and D are both on circle BQD, so its centre also lies on the perpendicular bisector of DT, which is ℓ.

Step 6 - Conclude. Both centres lie on ℓ, so the line joining them is ℓ, and ℓ ∥ AD. ∎

(The proof uses the usual diagram, with Q between B and C and P between T and Q.)` },
};
