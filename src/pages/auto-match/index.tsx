import { Button } from '@/components/Elements';
import { Header, MainLayout } from '@/components/Layout';
// import { Spinner } from '@/components/Elements';
import Head from 'next/head';
import {
  Waitting,
  WaittingText,
} from '@/styles/pageStyles/auto-match/index.style';
import { useState } from 'react';
import { AutoMatchForm } from '@/features/mentorings';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function AutoMatch() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Header
          title="자동 매칭"
          leftbuttons={
            <Button
              textstyle="title"
              size="large"
              variant="background"
              padding="2px"
              startIcon={<FaArrowLeft />}
              onclick={() => router.back()}
            />
          }
        />
        <AutoMatchForm />
      </MainLayout>
    </>
  );
}
