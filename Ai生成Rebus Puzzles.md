太好了，这一步 **是你整个 Rebus 网站“规模化 + SEO 自动增长”的核心引擎**。
下面我给你一套 **「可直接复制使用」的 AI Prompt 库**，已经按 **网站类目 + SEO + 可视化生成**设计好，不是泛 prompt。

> **设计目标**
>
> * 生成「可直接发布」的 Rebus Puzzle
> * 统一风格、难度可控
> * 适合做成 **图片 + 文本解释**
> * 对 SEO 友好（Answer + Explanation）

---

# 一、通用 Rebus Puzzle 基础 Prompt（必用）

👉 **所有分类都基于这个母模板**

```
You are a rebus puzzle creator.

Create ONE rebus puzzle.
- The answer must be a common English word or phrase.
- The puzzle should be solvable using visual clues and pronunciation.
- Use simple, universally recognizable objects or symbols.
- Avoid proper nouns unless specified.

Output format:
1. Category:
2. Difficulty: (Easy / Medium / Hard)
3. Answer:
4. Visual Elements: (list each object clearly)
5. Explanation: (step-by-step, beginner friendly)
```

---

# 二、不同网站类目的专用 Prompt（重点）

下面这些 **可以直接一条条用**，也可以接 API 批量生成。

---

## 1️⃣ Easy Rebus Puzzles（新手 / 流量最大）

```
Create an EASY rebus puzzle.

Rules:
- Target beginners and ESL learners.
- Use only 2–3 visual elements.
- The answer must be a single common English word.
- Avoid idioms.

Examples of acceptable answers: believe, weekend, sunshine

Follow the standard output format.
```

---

## 2️⃣ Medium Rebus Puzzles（主流用户）

```
Create a MEDIUM difficulty rebus puzzle.

Rules:
- Use 3–4 visual elements.
- The answer should be a common English phrase.
- Include at least one pronunciation-based clue.
- No abstract symbols.

Follow the standard output format.
```

---

## 3️⃣ Hard Rebus Puzzles（提高停留时间）

```
Create a HARD rebus puzzle.

Rules:
- Use 4–6 visual elements.
- The answer should be an idiom or figurative phrase.
- Require at least two interpretation steps.
- Avoid obscure vocabulary.

Follow the standard output format.
```

---

## 4️⃣ Rebus Puzzles for Kids（儿童向）

```
Create a rebus puzzle for KIDS.

Rules:
- Use colorful, friendly objects (animals, food, toys).
- Avoid abstract ideas.
- The answer must be a simple word or phrase a child knows.
- Difficulty: Easy only.

Follow the standard output format.
```

---

## 5️⃣ Pop Culture Rebus Puzzles（高分享）

```
Create a POP CULTURE rebus puzzle.

Rules:
- Base it on movies, music, or TV concepts.
- Do NOT use real person names.
- Use symbolic references instead.
- The answer should be widely recognizable.

Follow the standard output format.
```

---

## 6️⃣ Idioms & Phrases Rebus（SEO 金矿）

```
Create a rebus puzzle based on an ENGLISH IDIOM.

Rules:
- The answer must be a well-known idiom.
- Visual elements should represent the literal meaning.
- The idiom should be commonly used in daily English.

Follow the standard output format.
```

---

## 7️⃣ Everyday Objects Rebus（低认知成本）

```
Create a rebus puzzle using EVERYDAY OBJECTS.

Rules:
- All visual elements must be common household or daily items.
- The answer must be a phrase related to everyday life.
- Avoid fantasy or abstract symbols.

Follow the standard output format.
```

---

## 8️⃣ Nature & Animals Rebus（儿童 + 教育）

```
Create a rebus puzzle based on NATURE or ANIMALS.

Rules:
- Use animals, plants, or natural elements.
- The answer should be a common word or phrase.
- Avoid scientific terms.

Follow the standard output format.
```

---

## 9️⃣ Food & Drink Rebus（点击率高）

```
Create a FOOD & DRINK themed rebus puzzle.

Rules:
- Use food or beverage items only.
- The answer must be related to food, eating, or taste.
- Keep the puzzle playful and simple.

Follow the standard output format.
```

---

## 🔟 Travel & Places Rebus（搜索量稳定）

```
Create a TRAVEL themed rebus puzzle.

Rules:
- Use transportation, landmarks (generic), or travel items.
- Do NOT name real cities or countries.
- The answer should relate to travel or movement.

Follow the standard output format.
```

---

## 11️⃣ History & Mythology Rebus（成人向）

```
Create a HISTORY or MYTHOLOGY rebus puzzle.

Rules:
- Use symbolic objects (crowns, swords, temples).
- Avoid obscure references.
- The answer should be a commonly known concept or phrase.

Follow the standard output format.
```

---

# 三、进阶：图片生成专用 Prompt（配合 Midjourney / DALL·E）

👉 用在「Visual Elements」后面

```
Create a flat, colorful rebus puzzle illustration.
- White background
- Simple vector style
- Clear separation between elements
- No text, no letters
- Educational puzzle style
```

---

# 四、SEO 批量生成模式（你的网站王炸）

### 🔁 一次生成 30 道题的 Prompt

```
Generate 30 EASY rebus puzzles.
Each puzzle should follow the standard format.
Do not repeat answers.
Keep vocabulary common and SEO friendly.
```

---

# 五、强烈建议你的网站内容字段结构（直接可用）

```json
{
  "answer": "",
  "difficulty": "",
  "category": "",
  "visual_elements": [],
  "explanation": ""
}
```

---

## 下一步我可以直接帮你：

* ✅ 生成 **100 道可直接发布的 Rebus Puzzles**
* ✅ 帮你做 **AI → 图片 → 页面自动化流程**
* ✅ 写 **WordPress 批量导入 Prompt**
* ✅ 给你 **Daily Puzzle 自动更新方案**

你只要告诉我一句：
👉 **你准备用哪一个 AI（ChatGPT / Midjourney / SD）？**
