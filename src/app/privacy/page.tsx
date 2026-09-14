import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'サンバンダ（幸手市インド料理）のプライバシーポリシー。Cookieとアクセス解析、個人情報の取扱いについて。',
  openGraph: {
    title: 'プライバシーポリシー · サンバンダ - 幸手市インド料理',
    description: 'サンバンダのプライバシーポリシー。Cookieとアクセス解析、個人情報の取扱いについて。',
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

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ink">
      <section className="px-6 pt-36 md:pt-44">
        <div className="mx-auto max-w-4xl">
          <p className="apple-eyebrow mb-4">サンバンダ</p>
          <h1 className="font-jp text-4xl font-light leading-tight text-cream md:text-6xl">
            プライバシー
            <br />
            ポリシー
          </h1>
          <p className="mt-6 font-jp text-lg text-cream/60">最終更新日：2026年9月14日</p>
        </div>
      </section>

      <section className="px-6 pb-24 pt-10 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <LegalSection title="1. はじめに">
            <p>
              サンバンダ（以下「当店」といいます）は、当店Webサイト（https://sambandharestaurant.com、以下「本サイト」といいます）をご利用いただくお客様の個人情報を適切に保護するため、本プライバシーポリシーを定め、法令を遵守して管理いたします。
            </p>
          </LegalSection>

          <LegalSection title="2. 取得する情報">
            <p>当店は、以下の情報を取得することがあります。</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Cookie情報・アクセス解析データ（閲覧ページ、滞在時間、デバイス情報、おおよその地域、参照元サイト等）</li>
              <li>ご予約・お問い合わせの際にご入力いただく情報（氏名、電話番号、メールアドレス、ご来店日時、人数など）</li>
              <li>お電話によるご予約時のご連絡先・ご要望内容</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. 利用目的">
            <p>取得した情報は、以下の目的のために利用いたします。</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>ご予約の受付・確認・ご案内</li>
              <li>お問い合わせへの対応</li>
              <li>本サイトの利便性向上および利用状況の分析</li>
              <li>法令に基づき必要な場合の対応</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. CookieとGoogle Analyticsについて">
            <p>
              本サイトは、訪問状況の分析のため Google Analytics（Google LLC）を利用しています。Google Analytics はCookieを使用して、お客様の利用状況を匿名で収集します。収集された情報はGoogleのプライバシーポリシーに基づき管理されます。
            </p>
            <p>
              当店はCookieの利用について、初回訪問時に同意をいただく方式を採用しています。同意をいただけない場合、アクセス解析ツールは作動しません。また、同意はブラウザ設定によりいつでも変更・撤回が可能です。
            </p>
            <p>
              Google Analytics によるデータの扱いについては、Google プライバシーポリシー（https://policies.google.com/privacy）をご確認ください。
            </p>
          </LegalSection>

          <LegalSection title="5. 第三者への提供">
            <p>
              当店は、次の場合を除き、お客様の個人情報を第三者に提供いたしません。なお、アクセス解析に伴うGoogle LLCへの送信は、匿名化されたデータに限られます。
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>お客様の同意がある場合</li>
              <li>法令に基づき開示を求められた場合</li>
              <li>人の生命・身体・財産の保護のために必要であり、本人の同意を得ることが困難である場合</li>
            </ul>
          </LegalSection>

          <LegalSection title="6. 保存期間">
            <p>
              取得した情報は、利用目的を達成するために必要な期間のみ保持し、期間経過後は適切に削除いたします。
            </p>
          </LegalSection>

          <LegalSection title="7. お客様の権利">
            <p>
              お客様は、ご自身の個人情報について、開示・訂正・削除・利用停止を求めることができます。ご希望の場合は、下記の窓口までご連絡ください。ご本人確認のうえ、合理的な期間内に対応いたします。
            </p>
          </LegalSection>

          <LegalSection title="8. お問い合わせ窓口">
            <p>個人情報の取扱いに関するご質問・ご意見は、下記までお願いいたします。</p>
            <div className="apple-card mt-4 p-6">
              <p className="font-jp text-sm font-medium text-cream">サンバンダ</p>
              <p className="mt-2 font-jp text-sm text-cream/60">埼玉県幸手市東2-20-40（〒340-0114）</p>
              <p className="mt-1 font-jp text-sm text-cream/60">電話：0480-44-2323</p>
              <p className="mt-1 font-jp text-sm text-cream/60">メール：sambandha2009@gmail.com</p>
            </div>
          </LegalSection>

          <LegalSection title="9. 改定">
            <p>
              当店は、法令の変更や運用の改善に伴い、本ポリシーを改定することがあります。重要な変更がある場合は、本サイト上でお知らせいたします。
            </p>
          </LegalSection>
        </div>
      </section>
    </div>
  );
}