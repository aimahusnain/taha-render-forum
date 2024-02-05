'use client'

import { Post, Prisma, Subreddit } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import debounce from 'lodash.debounce'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useCallback, useEffect, useRef, useState } from 'react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/src/components/ui/Command'
import { useOnClickOutside } from '@/src/hooks/use-on-click-outside'
import { Users } from 'lucide-react'
import Link from 'next/link'

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  const [input, setInput] = useState<string>('')
  const pathname = usePathname()
  const commandRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useOnClickOutside(commandRef, () => {
    setInput('')
  })

  const request = debounce(async () => {
    refetch()
  }, 300)

  const debounceRequest = useCallback(() => {
    request()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

 const {
  isFetching,
  data: queryResults,
  refetch,
  isFetched,
} = useQuery({
  queryFn: async () => {
    if (!input) return [];
    const { data } = await axios.get(`/api/search?q=${input}`);
    return data as (Subreddit | Post & {
      _count?: Prisma.SubredditCountOutputType;
      author?: any;
      subreddit?: any;
      comments?: any;
    })[];
  },
  queryKey: ['search-query'],
  enabled: false,
});

  useEffect(() => {
    setInput('')
  }, [pathname])

  return (
    <Command
      ref={commandRef}
      className='relative rounded-lg border max-w-lg z-50 overflow-visible'
    >
      <CommandInput
        isLoading={isFetching}
        onValueChange={(text) => {
          setInput(text);
          debounceRequest();
        }}
        value={input}
        className='outline-none border-none focus:border-none focus:outline-none ring-0'
        placeholder='Search Communities & Posts'
      />

      {input.length > 0 && (
        <CommandList className='absolute bg-white top-full inset-x-0 shadow rounded-b-md'>
          {isFetched && <CommandEmpty>No results found.</CommandEmpty>}
          {(queryResults?.length ?? 0) > 0 ? (
            <CommandGroup heading='Communities & Posts'>
              {queryResults?.map((result) => (
                <CommandItem
                  key={result.id}
                  value={'name' in result ? result.name : result.title}
                >
                  {'name' in result ? (
                    <Users className='mr-2 h-4 w-4' />
                  ) : (
                    <span className='mr-2 h-4 w-4'>📝</span>
                  )}
                  {'name' in result ? (
                    <Link href={`/r/${result.name}`}>r/{result.name}</Link>
                  ) : (
<Link href={`/r/${result.subreddit.name}/post/${result.id}`}>p/{result.title}</Link>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          ) : null}
        </CommandList>
      )}
    </Command>
  )
}

export default SearchBar
