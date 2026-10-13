#!/usr/bin/env node
/**
 * Source-preserving refactor for the Two Pointer TSX page supplied by the user.
 * Usage: node scripts/refactor-two-pointer.mjs src/pages/algorithms/TwoPointer.tsx
 * It backs up the original file, extracts each section verbatim, splits shared
 * UI/data into modules, and adds Java/Python variants for named code examples.
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const inputArg = process.argv[2];
if (!inputArg) {
  console.error('Usage: node scripts/refactor-two-pointer.mjs <path-to-original-TwoPointer.tsx>');
  process.exit(2);
}

const inputPath = path.resolve(inputArg);
if (!fs.existsSync(inputPath)) {
  console.error(`Source file not found: ${inputPath}`);
  process.exit(2);
}

const source = fs.readFileSync(inputPath, 'utf8');
const pageStart = source.indexOf('export default function TwoPointer()');
if (pageStart < 0) throw new Error('Could not find `export default function TwoPointer()` in the source.');

const sections = [
  { marker: '/* Introduction */', id: 'introduction', name: 'IntroductionSection' },
  { marker: '/* Pointer */', id: 'pointer', name: 'PointerSection' },
  { marker: '/* Two Pointer */', id: 'two-pointers', name: 'TwoPointersSection' },
  { marker: '/* Opposite direction */', id: 'opposite-direction', name: 'OppositeDirectionSection' },
  { marker: '/* Same direction */', id: 'same-direction', name: 'SameDirectionSection' },
  { marker: '/* When to use */', id: 'when-to-use', name: 'WhenToUseSection' },
  { marker: '/* Valid Palindrome */', id: 'valid-palindrome', name: 'ValidPalindromeSection' },
  { marker: '/* Problem */', id: 'problem', name: 'ProblemSection' },
  { marker: '/* Brute force */', id: 'brute-force', name: 'BruteForceSection' },
  { marker: '/* Pattern */', id: 'pattern', name: 'PatternSection' },
  { marker: '/* Dry run */', id: 'dry-run', name: 'DryRunSection' },
  { marker: '/* Solution */', id: 'solution', name: 'SolutionSection' },
  { marker: '/* Explain code */', id: 'explain-code', name: 'ExplainCodeSection' },
  { marker: '/* Edge cases */', id: 'edge-cases', name: 'EdgeCasesSection' },
  { marker: '/* Mistakes */', id: 'mistakes', name: 'MistakesSection' },
  { marker: '/* Summary */', id: 'summary', name: 'SummarySection' },
];

const iconImportMatch = source.match(/import\s*\{([\s\S]*?)\}\s*from\s*["']lucide-react["'];/);
if (!iconImportMatch) throw new Error('Could not parse lucide-react imports.');
const iconNames = iconImportMatch[1].split(',').map(s => s.trim()).filter(Boolean);
const helperNames = ['CodeBlock', 'SectionTitle', 'InfoBox', 'Complexity', 'StepCard'];

function findBetween(text, startMarker, endMarker) {
  const start = text.indexOf(startMarker);
  if (start < 0) throw new Error(`Missing marker: ${startMarker}`);
  const end = text.indexOf(endMarker, start + startMarker.length);
  if (end < 0) throw new Error(`Missing end marker: ${endMarker}`);
  return { start, end, value: text.slice(start, end).trim() };
}

function extractCodeConstants(text) {
  const re = /const\s+(\w+Code)\s*=\s*`([\s\S]*?)`\s*;/g;
  const found = [];
  let m;
  while ((m = re.exec(text))) found.push({ name: m[1], c: m[2], start: m.index, end: re.lastIndex });
  const required = ['pointerBasicCode', 'oppositeDirectionCode', 'sameDirectionCode', 'palindromeBruteForceCode', 'palindromeStackCode', 'validPalindromeCode', 'simplifiedPalindromeCode'];
  for (const name of required) if (!found.some(x => x.name === name)) throw new Error(`Missing code constant: ${name}`);
  return found;
}

const variants = {
  pointerBasicCode: {
    Java: `int[] numbers = {10, 20, 30, 40, 50};\n\nint left = 0;\nint right = numbers.length - 1;\n\n// left đang ở numbers[0]\n// right đang ở numbers[4]`,
    Python: `numbers = [10, 20, 30, 40, 50]\n\nleft = 0\nright = len(numbers) - 1\n\n# left đang ở numbers[0]\n# right đang ở numbers[4]`,
  },
  oppositeDirectionCode: {
    Java: `int left = 0;\nint right = n - 1;\n\nwhile (left < right) {\n    // xử lý numbers[left]\n    // xử lý numbers[right]\n\n    left++;\n    right--;\n}`,
    Python: `left = 0\nright = n - 1\n\nwhile left < right:\n    # xử lý numbers[left]\n    # xử lý numbers[right]\n\n    left += 1\n    right -= 1`,
  },
  sameDirectionCode: {
    Java: `int left = 0;\n\nfor (int right = 0; right < n; right++) {\n    // right khám phá dữ liệu mới\n\n    if (/* điều kiện */) {\n        left++;\n    }\n}`,
    Python: `left = 0\n\nfor right in range(n):\n    # right khám phá dữ liệu mới\n\n    if điều_kiện:\n        left += 1`,
  },
  palindromeBruteForceCode: {
    Java: `// Ý tưởng:\n// 1. Lọc bỏ ký tự không phải chữ/số\n// 2. Chuyển tất cả về lowercase\n// 3. Tạo chuỗi mới\n// 4. So sánh chuỗi với phiên bản đảo ngược\n\n// Ví dụ:\n// "A man, a plan, a canal: Panama"\n// =>\n// "amanaplanacanalpanama"`,
    Python: `# Ý tưởng:\n# 1. Lọc bỏ ký tự không phải chữ/số\n# 2. Chuyển tất cả về lowercase\n# 3. Tạo chuỗi mới\n# 4. So sánh chuỗi với phiên bản đảo ngược\n\n# Ví dụ:\n# "A man, a plan, a canal: Panama"\n# =>\n# "amanaplanacanalpanama"`,
  },
  palindromeStackCode: {
    Java: `// Có thể dùng Stack để:\n// 1. Push từng ký tự\n// 2. Pop ngược lại\n// 3. So sánh với chuỗi ban đầu\n\n// Nhưng cách này cần thêm bộ nhớ O(n)\n// và không cần thiết cho bài toán này.`,
    Python: `# Có thể dùng Stack để:\n# 1. Push từng ký tự\n# 2. Pop ngược lại\n# 3. So sánh với chuỗi ban đầu\n\n# Nhưng cách này cần thêm bộ nhớ O(n)\n# và không cần thiết cho bài toán này.`,
  },
  validPalindromeCode: {
    Java: `static boolean isAlphaNumeric(char c) {\n    return (c >= 'a' && c <= 'z') ||\n           (c >= 'A' && c <= 'Z') ||\n           (c >= '0' && c <= '9');\n}\n\nstatic char toLowerCaseAscii(char c) {\n    if (c >= 'A' && c <= 'Z') {\n        return (char) (c - 'A' + 'a');\n    }\n    return c;\n}\n\nstatic boolean isPalindrome(String s) {\n    int left = 0;\n    int right = s.length() - 1;\n\n    while (left < right) {\n        while (left < right && !isAlphaNumeric(s.charAt(left))) {\n            left++;\n        }\n        while (left < right && !isAlphaNumeric(s.charAt(right))) {\n            right--;\n        }\n\n        if (toLowerCaseAscii(s.charAt(left)) !=\n            toLowerCaseAscii(s.charAt(right))) {\n            return false;\n        }\n\n        left++;\n        right--;\n    }\n    return true;\n}`,
    Python: `def is_alphanumeric(c):\n    return ("a" <= c <= "z") or ("A" <= c <= "Z") or ("0" <= c <= "9")\n\ndef to_lower_case_ascii(c):\n    if "A" <= c <= "Z":\n        return chr(ord(c) - ord("A") + ord("a"))\n    return c\n\ndef is_palindrome(s):\n    left = 0\n    right = len(s) - 1\n\n    while left < right:\n        while left < right and not is_alphanumeric(s[left]):\n            left += 1\n        while left < right and not is_alphanumeric(s[right]):\n            right -= 1\n\n        if to_lower_case_ascii(s[left]) != to_lower_case_ascii(s[right]):\n            return False\n\n        left += 1\n        right -= 1\n\n    return True`,
  },
  simplifiedPalindromeCode: {
    Java: `static boolean isPalindrome(String s) {\n    int left = 0;\n    int right = s.length() - 1;\n\n    while (left < right) {\n        // Bỏ qua ký tự không hợp lệ\n        while (left < right && !isAlphaNumeric(s.charAt(left))) {\n            left++;\n        }\n        while (left < right && !isAlphaNumeric(s.charAt(right))) {\n            right--;\n        }\n\n        // So sánh hai đầu\n        if (toLowerCaseAscii(s.charAt(left)) !=\n            toLowerCaseAscii(s.charAt(right))) {\n            return false;\n        }\n\n        // Hai ký tự hợp lệ giống nhau\n        left++;\n        right--;\n    }\n    return true;\n}`,
    Python: `def is_palindrome(s):\n    left = 0\n    right = len(s) - 1\n\n    while left < right:\n        # Bỏ qua ký tự không hợp lệ\n        while left < right and not is_alphanumeric(s[left]):\n            left += 1\n        while left < right and not is_alphanumeric(s[right]):\n            right -= 1\n\n        # So sánh hai đầu\n        if to_lower_case_ascii(s[left]) != to_lower_case_ascii(s[right]):\n            return False\n\n        # Hai ký tự hợp lệ giống nhau\n        left += 1\n        right -= 1\n\n    return True`,
  },
};

const tocStart = source.indexOf('const toc = [');
const tocEndMarker = '\n];';
const tocEndAt = source.indexOf(tocEndMarker, tocStart);
if (tocStart < 0 || tocEndAt < 0 || tocStart > pageStart) throw new Error('Could not extract table of contents.');
let tocDecl = source.slice(tocStart, tocEndAt + tocEndMarker.length).replace(/^const toc/m, 'export const toc');

const codeConstants = extractCodeConstants(source.slice(0, pageStart)).map(x => ({ ...x }));
const dataConstants = codeConstants.map(({ name, c }) => {
  const extra = variants[name] ?? { Java: c, Python: c };
  return `export const ${name} = {\n  C: ${JSON.stringify(c)},\n  Java: ${JSON.stringify(extra.Java)},\n  Python: ${JSON.stringify(extra.Python)},\n} as const;`;
}).join('\n\n');

// Extract unchanged helper components except CodeBlock, which gains language tabs.
const helperStart = source.indexOf('function CodeBlock(');
const constantsStart = source.indexOf('const pointerBasicCode =');
if (helperStart < 0 || constantsStart < 0 || helperStart >= constantsStart) throw new Error('Could not locate shared UI helpers.');
const helperBlock = source.slice(helperStart, constantsStart);
const helperDefs = {};
const helperOrder = ['CodeBlock', 'SectionTitle', 'InfoBox', 'Complexity', 'StepCard'];
for (let i = 0; i < helperOrder.length; i++) {
  const startNeedle = `function ${helperOrder[i]}(`;
  const start = helperBlock.indexOf(startNeedle);
  if (start < 0) throw new Error(`Missing UI helper ${helperOrder[i]}`);
  let end = helperBlock.length;
  if (i + 1 < helperOrder.length) {
    end = helperBlock.indexOf(`function ${helperOrder[i + 1]}(`, start);
  }
  helperDefs[helperOrder[i]] = helperBlock.slice(start, end).trim();
}

const improvedCodeBlock = `export function CodeBlock({ code, label = "C" }: { code: string | { C: string; Java: string; Python: string }; label?: string }) {
  const [language, setLanguage] = React.useState<"C" | "Java" | "Python">("C");
  const isMultiLanguage = typeof code !== "string";
  const shownCode = typeof code === "string" ? code : code[language];

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-slate-200/30">
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        {isMultiLanguage ? (
          <div className="flex items-center gap-1 rounded-lg bg-slate-950 p-1">
            {(["C", "Java", "Python"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={\`rounded-md px-3 py-1.5 text-xs font-semibold transition \${language === item ? "bg-white text-slate-950" : "text-slate-400 hover:text-white"}\`}
                aria-pressed={language === item}
              >
                {item}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Code2 size={14} />
            {label}
          </div>
        )}
      </div>
      <div className="overflow-x-auto p-5">
        <pre className="font-mono text-[13px] leading-7 text-slate-300 sm:text-sm">
          <code>{shownCode}</code>
        </pre>
      </div>
    </div>
  );
}`;

const iconNamesFor = (jsx) => iconNames.filter(name => new RegExp(`<${name}(?:\\s|>)`).test(jsx));
const uiNamesFor = (jsx) => helperOrder.filter(name => name !== 'CodeBlock' || /<CodeBlock\b/.test(jsx)).filter(name => new RegExp(`<${name}\\b`).test(jsx));

let componentSource = source.slice(pageStart);
const outputSections = [];
for (const section of sections) {
  const markerAt = componentSource.indexOf(section.marker);
  if (markerAt < 0) throw new Error(`Could not find section marker ${section.marker}`);
  const openAt = componentSource.indexOf(`<section id="${section.id}"`, markerAt);
  if (openAt < 0) throw new Error(`Could not find section element #${section.id}`);
  const closeAt = componentSource.indexOf('</section>', openAt);
  if (closeAt < 0) throw new Error(`Could not find closing section for #${section.id}`);
  const sectionEnd = closeAt + '</section>'.length;
  const jsx = componentSource.slice(openAt, sectionEnd);
  outputSections.push({ ...section, jsx });
  componentSource = componentSource.slice(0, markerAt) + `          <${section.name} />` + componentSource.slice(sectionEnd);
}

// Compose the data module with the original TOC and original C strings plus added Java/Python variants.
const dataDir = path.join(path.dirname(inputPath), 'two-pointer', 'data');
const sectionsDir = path.join(path.dirname(inputPath), 'two-pointer', 'sections');
const componentsDir = path.join(path.dirname(inputPath), 'two-pointer', 'components');
const pageDir = path.join(path.dirname(inputPath), 'two-pointer');
for (const dir of [dataDir, sectionsDir, componentsDir]) fs.mkdirSync(dir, { recursive: true });

fs.writeFileSync(path.join(dataDir, 'twoPointerData.ts'), `${tocDecl}\n\n${dataConstants}\n`, 'utf8');

for (const section of outputSections) {
  const icons = iconNamesFor(section.jsx);
  const ui = uiNamesFor(section.jsx);
  const constantImports = codeConstants.map(c => c.name).filter(name => new RegExp(`\\b${name}\\b`).test(section.jsx));
  const imports = [
    `import React from "react";`,
    icons.length ? `import { ${icons.join(', ')} } from "lucide-react";` : '',
    ui.length ? `import { ${ui.join(', ')} } from "../components/TwoPointerUI";` : '',
    constantImports.length ? `import { ${constantImports.join(', ')} } from "../data/twoPointerData";` : '',
    /<Link\b/.test(section.jsx) ? `import { Link } from "react-router-dom";` : '',
  ].filter(Boolean).join('\n');
  const out = `${imports}\n\nexport default function ${section.name}() {\n  return (\n${section.jsx}\n  );\n}\n`;
  fs.writeFileSync(path.join(sectionsDir, `${section.name}.tsx`), out, 'utf8');
}

const helperBodies = ['SectionTitle', 'InfoBox', 'Complexity', 'StepCard'].map(name => helperDefs[name].replace(`function ${name}(`, `export function ${name}(`)).join('\n\n');
const uiFile = `import React from "react";\nimport { Code2, CircleAlert, Clock3, GitBranch, Lightbulb, Zap } from "lucide-react";\n\n${improvedCodeBlock}\n\n${helperBodies}\n`;
fs.writeFileSync(path.join(componentsDir, 'TwoPointerUI.tsx'), uiFile, 'utf8');

// Remove the original source imports, TOC/helpers/constants from the page module;
// the body content and section JSX remain intact in their generated section files.
const pageBody = componentSource;
const rootIcons = iconNamesFor(pageBody);
const sectionImports = outputSections.map(s => `import ${s.name} from "./sections/${s.name}";`).join('\n');
const rootHeader = [
  `import React from "react";`,
  rootIcons.length ? `import { ${rootIcons.join(', ')} } from "lucide-react";` : '',
  `import { toc } from "./data/twoPointerData";`,
  sectionImports,
].filter(Boolean).join('\n');
fs.writeFileSync(path.join(pageDir, 'TwoPointer.tsx'), `${rootHeader}\n\n${pageBody}`, 'utf8');

// Make the old route/module path continue working. Keep a backup of the original file.
const backupPath = inputPath.replace(/\.(tsx|jsx|js)$/, '.original.$1');
if (!fs.existsSync(backupPath)) fs.copyFileSync(inputPath, backupPath);
fs.writeFileSync(inputPath, `export { default } from "./two-pointer/TwoPointer";\n`, 'utf8');

console.log(`Refactor complete. Generated ${outputSections.length} section files under: ${pageDir}`);
console.log(`Original source backup: ${backupPath}`);
console.log(`Updated route shim: ${inputPath}`);
