# Rebus Puzzles 项目概览

这是一个基于 Next.js 构建的 Rebus 谜题网站，提供免费的在线图片文字谜题游戏。网站包含多种难度级别和主题的谜题，适合儿童和成人。

## 项目架构

### 技术栈
- **前端框架**: Next.js 15.5.0 (React 19.1.0)
- **UI 组件库**: Flowbite React 0.11.7
- **样式**: Tailwind CSS 4.1.4
- **语言**: TypeScript
- **包管理**: npm/pnpm
- **字体**: Montserrat (通过 Google Fonts)

### 目录结构
```
E:\rebus-puzzles-wp\
└── rebus-puzzles/
    ├── app/                    # Next.js App Router 页面
    │   ├── [difficulty]-rebus-puzzles/  # 难度分类页面
    │   ├── [theme]-rebus-puzzles/       # 主题分类页面
    │   ├── rebus-puzzles-for-[audience]/ # 受众分类页面
    │   ├── layout.tsx            # 根布局
    │   └── page.tsx              # 首页
    ├── public/                  # 静态资源
    │   └── images/              # 谜题图片
    ├── src/
    │   ├── components/         # 可复用组件
    │   │   ├── RebusPuzzleCard.tsx  # 谜题卡片组件
    │   │   ├── PageLayout.tsx       # 页面布局组件
    │   │   ├── header.tsx           # 页头组件
    │   │   └── footer.tsx           # 页脚组件
    │   ├── context/            # React Context
    │   └── types/              # TypeScript 类型定义
    └── scripts/               # 构建脚本
```

## 核心功能

### 谜题分类系统
1. **按难度分类**
   - Easy Rebus Puzzles (`/easy-rebus-puzzles`)
   - Medium Rebus Puzzles (`/medium-rebus-puzzles`)
   - Hard Rebus Puzzles (`/hard-rebus-puzzles`)

2. **按年龄分类**
   - Rebus Puzzles for Kids (`/rebus-puzzles-for-kids`)
   - Rebus Puzzles for Adults (`/rebus-puzzles-for-adults`)

3. **按主题分类**
   - Christmas Rebus Puzzles (`/christmas-rebus-puzzles`)
   - Love Rebus Puzzles (`/love-rebus-puzzles`)
   - Movie Rebus Puzzles (`/movie-rebus-puzzles`)
   - Animal Rebus Puzzles (`/animal-rebus-puzzles`)

4. **其他资源**
   - Printable Rebus Puzzles (`/printable-rebus-puzzles`)
   - What is Rebus Puzzle (`/what-is-rebus-puzzle`)

### 谜题数据结构
每个谜题包含以下信息：
```typescript
interface RebusPuzzle {
  id: number;
  imageUrl: string;
  answer: string;
  hint?: string;
}
```

### 核心组件

#### RebusPuzzleCard 组件
- 位置: `src/components/RebusPuzzleCard.tsx`
- 功能: 显示单个谜题，包含图片、答案显示/隐藏功能
- 特性: 响应式设计，交互式答案展示

#### PageLayout 组件
- 位置: `src/components/PageLayout.tsx`
- 功能: 提供统一的页面布局结构
- 用途: 用于 Coming Soon 页面和通用布局

## 构建和运行

### 开发环境
```bash
cd rebus-puzzles
npm run dev
```
启动开发服务器，通常在 http://localhost:3000

### 生产构建
```bash
npm run build
```
构建命令包含两个步骤：
1. Next.js 构建
2. 复制 ads.txt 文件到 public 目录
3. 自动生成 sitemap.xml

### 其他脚本
```bash
npm start          # 启动生产服务器
npm run lint       # 代码检查
npm run format     # 代码格式化
npm run format:check # 检查代码格式
```

## 开发约定

### 代码规范
- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 配置进行代码检查
- 使用 Prettier 进行代码格式化
- 组件使用函数式组件和 React Hooks

### 文件命名
- 页面文件使用 kebab-case: `easy-rebus-puzzles/page.tsx`
- 组件文件使用 PascalCase: `RebusPuzzleCard.tsx`
- 样式文件使用 kebab-case: `globals.css`

### 路由结构
- 使用 Next.js App Router
- 每个分类页面都是独立的路由
- 页面组件导出默认函数和 metadata

### 图片处理
- 谜题图片存储在 `public/images/` 目录
- 支持外部图片域名配置
- 使用 Next.js Image 组件优化加载

### SEO 优化
- 每个页面都有独立的 metadata
- 自动生成 sitemap.xml
- 支持 Google Analytics
- 包含 Google AdSense 集成

## 部署和配置

### 环境变量
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID

### 构建优化
- 自动生成 sitemap
- 图片优化和域名配置
- Flowbite React 集成和补丁

### 广告集成
- Google AdSense 集成
- ads.txt 文件自动复制到构建输出

## 开发注意事项

1. **图片路径**: 所有谜题图片路径应以 `/images/` 开头
2. **组件复用**: 谜题卡片使用统一的 RebusPuzzleCard 组件
3. **响应式设计**: 所有页面都需要支持移动端适配
4. **SEO**: 每个页面都需要适当的 title、description 和 keywords
5. **性能**: 使用 Next.js Image 组件优化图片加载

## 常见任务

### 添加新的谜题页面
1. 在 `app/` 目录下创建新的路由文件夹
2. 创建 `page.tsx` 文件
3. 定义谜题数据数组
4. 使用 RebusPuzzleCard 组件渲染谜题
5. 添加适当的 metadata

### 更新谜题内容
1. 找到对应页面的谜题数据数组
2. 修改或添加新的谜题对象
3. 确保 imageUrl 路径正确
4. 测试答案和提示功能

### 修改样式
1. 全局样式修改: `app/globals.css`
2. 组件级别样式: 使用 Tailwind CSS 类
3. 主题配置: `app/theme.ts`