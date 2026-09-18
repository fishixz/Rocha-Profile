import React from "react";
import { ImageResponse } from "next/og";
import { buildProfile } from "../../../lib/profile-data";
import { CardShell } from "../../../lib/ui-layout";
import { IdentityPage, ProgressPage, FinancesPage, RoleplayPage } from "../../../lib/pages-main";
import { LicensesPage, PropertiesPage, StatisticsPage, InventoryPage } from "../../../lib/pages-extra";

export const runtime = "edge";

async function resolveSkinUrl(skin) {
  const url = `https://gtastuff.com/api/thumb?id=${encodeURIComponent(skin)}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "RochaProfile/1.0"
      },
      cache: "force-cache"
    });

    const type = response.headers.get("content-type") || "";
    if (!response.ok || !type.startsWith("image/")) return null;
    return url;
  } catch {
    return null;
  }
}

function PageView({ profile }) {
  switch (profile.page) {
    case "progress":
      return <ProgressPage profile={profile} />;
    case "finances":
      return <FinancesPage profile={profile} />;
    case "roleplay":
      return <RoleplayPage profile={profile} />;
    case "licenses":
      return <LicensesPage profile={profile} />;
    case "properties":
      return <PropertiesPage profile={profile} />;
    case "statistics":
      return <StatisticsPage profile={profile} />;
    case "inventory":
      return <InventoryPage profile={profile} />;
    case "identity":
    default:
      return <IdentityPage profile={profile} />;
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const profile = buildProfile(searchParams);
  const skinUrl = await resolveSkinUrl(profile.skin);

  return new ImageResponse(
    (
      <CardShell profile={profile} skinUrl={skinUrl}>
        <PageView profile={profile} />
      </CardShell>
    ),
    {
      width: 1200,
      height: 675,
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=600"
      }
    }
  );
}
