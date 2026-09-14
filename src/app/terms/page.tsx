import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '利用規約',
  description: 'サンバンダ（幸手市インド料理）のWebサイト利用規約。ご予約・メニュー・免責事項について。',
  openGraph: {
    title: '利用規約 · サンバンダ - 幸手市インド料理',
    description: 'サンバンダのWebサイト利用規約。ご予約・メニュー・免責事項について。',
    images: [{ url: '/images/hero-spread.jpg', width: 1200, height: 630 }],
  },
};

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="font-jp text-xl font-medium text-cream md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 font-jp text-sm leading-relaxed text-cream/60">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ink">
      <section className="px-6 pt-36 md:pt-44">
        <div className="mx-auto max-w-4xl">
          <p className="apple-eyebrow mb-4">サンバンダ</p>
          <h1 className="font-jp text-4xl font-light leading-tight text-cream md:text-6xl">
            利用
            <br />
            規約
          </h1>
          <p className="mt-6 font-jp text-lg text-cream/60">最終更新日：2026年9月14日</p>
        </div>
      </section>

      <section className="px-6 pb-24 pt-10 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <LegalSection title="1. 適用">
            <p>
              本利用規約は、サンバンダ（以下「当店」といいます）が運営するWebサイト（https://sambandharestaurant.com、以下「本サイト」といいます）の利用条件を定めるものです。本サイトをご利用いただくすべてのお客様に適用されます。
            </p>
          </LegalSection>

          <LegalSection title="2. 本サイトの利用">
            <p>
              お客様は、本サイトを自己の責任において利用するものとします。当店は、本サイトの内容を予告なく変更・中断・終了する場合があります。
            </p>
          </LegalSection>

          <LegalSection title="3. ご予約について">
            <ul className="list-disc space-y-1 pl-5">
              <li>ご予約は電話（0480-44-2323）または予約フォームにて承ります。</li>
              <li>ご予約の際は、お名前・連絡先・ご来店日時・人数をご連絡ください。</li>
              <li>ご来店が大幅に遅れる場合、またはご都合が悪くなった場合は、お早めにご連絡ください。</li>
              <li>当店は、混雑状況によりご希望に添えない場合や、ご予約の確認をお願いする場合があります。</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. メニュー・料金">
            <p>
              本サイトに掲載のメニュー・価格・営業時間は、仕入れ状況や季節により予告なく変更される場合があります。表示価格は特に記載がない限り税込です。食料品アレルギーをお持ちのお客様は、ご注文前にスタッフへお申し出ください。
            </p>
          </LegalSection>

          <LegalSection title="5. 知的財産権">
            <p>
              本サイトに掲載されている文章・画像・ロゴ・デザイン等の著作物に関する権利は、当店または正当な権利者に帰属します。私的使用目的を超えた複製・転載・改変・再配布は、事前の書面による同意なく行うことはできません。
            </p>
          </LegalSection>

          <LegalSection title="6. 禁止事項">
            <p>お客様は、本サイトの利用にあたり、以下の行為をしてはなりません。</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>第三者または当店の権利・財産を侵害する行為</li>
              <li>虚偽の情報を入力する行為</li>
              <li>本サイトの運営を妨害する行為</li>
              <li>法令または公序良俗に反する行為</li>
              <li>その他、当店が不適切と判断する行為</li>
            </ul>
          </LegalSection>

          <LegalSection title="7. 第三者リンク">
            <p>
              本サイトには、外部サイトへのリンクが含まれる場合があります。リンク先のWebサイトの内容・個人情報の取扱いについて、当店は責任を負いません。各リンク先の利用条件・プライバシーポリシーをご確認ください。
            </p>
          </LegalSection>

          <LegalSection title="8. 免責事項">
            <p>
              当店は、本サイトに掲載する情報について可能な限り正確を期しますが、その完全性・正確性・有用性を保証するものではありません。本サイトの利用により生じたいかなる損害についても、当店に故意または重大な過失がある場合を除き、責任を負いません。
            </p>
          </LegalSection>

          <LegalSection title="9. 準拠法・管轄">
            <p>
              本利用規約は日本法に準拠します。本サイトの利用に関して紛争が生じた場合は、さいたま地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </LegalSection>

          <LegalSection title="10. お問い合わせ">
            <p>本利用規約に関するお問い合わせは、下記までお願いいたします。</p>
            <div className="apple-card mt-4 p-6">
              <p className="font-jp text-sm font-medium text-cream">サンバンダ</p>
              <p className="mt-2 font-jp text-sm text-cream/60">埼玉県幸手市東2-20-40（〒340-0114）</p>
              <p className="mt-1 font-jp text-sm text-cream/60">電話：0480-44-2323</p>
              <p className="mt-1 font-jp text-sm text-cream/60">メール：sambandha2009@gmail.com</p>
            </div>
          </LegalSection>
        </div>
      </section>
    </div>
  );
}