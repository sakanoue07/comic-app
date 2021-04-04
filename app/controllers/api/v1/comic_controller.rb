require 'net/http' #標準ライブラリの呼び出し
require 'uri'
require "json"
require 'open-uri'
class Api::V1::ComicController < ApplicationController
    def search
        year = params[:comic][:year]
        month = params[:comic][:month]
        url = URI.parse("https://books.rakuten.co.jp/event/book/comic/calendar/#{year}/#{month}/js/booklist.json")
        # logger.debug("https://books.rakuten.co.jp/event/book/comic/calendar/#{year}/#{month}/js/booklist.json")
        # uri = URI.parse('https://books.rakuten.co.jp/event/book/comic/calendar/2021/04/js/booklist.json')
        response = Net::HTTP.get_response(url)
        result = response.body
        # result = JSON.parse(response, {:symbolize_names => true})
        render json: result
    end

    def openDB
        isbn_box = []
        comicIsbn = params[:comicIsbn]        
        comicIsbn[0..300].each do |isbn|
            url = URI.parse("https://api.openbd.jp/v1/get?isbn=#{isbn}")
            response = Net::HTTP.get_response(url)
            result = JSON.parse(response.body)
            if result != [nil]
                isbn_box.push(result)
            end
        end
        render json: isbn_box
    end

    def comicName
        isbn = params[:isbn]
        url = URI.parse("https://api.openbd.jp/v1/get?isbn=#{isbn}")
        response = Net::HTTP.get_response(url)
        result = JSON.parse(response.body)
        render json: result
    end
  
  
  end