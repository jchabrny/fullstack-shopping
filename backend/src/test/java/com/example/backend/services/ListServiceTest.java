package com.example.backend.services;

import com.example.backend.repositories.ListRepository;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.Mockito.mock;

class ListServiceTest {
/*
    private final ListRepository itemRepository = mock(ListRepository.class);

    private final ListService listService = new ListService(itemRepository);

    /*
    @Test
    void getItemById() {
        //GIVEN
        Item expected = Item.builder()
                .id("test-id")
                .name("test-name")
                // .user(User.newUser("test-username", "test-password", List.of()))
                .build();

        when(itemRepository.findById("test-id")).thenReturn(Optional.of(expected));

        //WHEN
        Optional<Item> actual = listService.getItemById("test-id");

        //THEN
        assertThat(actual, Matchers.is(Optional.of(expected)));
    }

    @Test
    void getItemNyNonExistingId() {
        //GIVEN
        Item expected = Item.builder()
                .id("test-id")
                .name("test-name")
              //  .user(User.newUser("test-username", "test-password", List.of()))
                .build();
        //WHEN
        Optional<Item> actual = listService.getItemById("wrong-id");

        //THEN
        assertThat(actual, Matchers.is(Optional.empty()));
    }

        @Test
        void getItemByNullId() {
            //GIVEN
            Item expected = Item.builder()
                    .id("test-id")
                    .name("test-name")
                    //  .user(User.newUser("test-username", "test-password", List.of()))
                    .build();

            when(itemRepository.findById("test-id")).thenReturn(Optional.of(expected));
            when(itemRepository.findById(null)).thenThrow(new IllegalArgumentException());

            //WHEN
            try {
                listService.getItemById(null);
                fail();
            } catch (IllegalArgumentException e) {
            }
        }
     */
    }
