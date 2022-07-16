
FROM ruby:3.0.2

COPY public /webapp/public

WORKDIR /webapp/ruby
COPY ruby/Gemfile* /webapp/ruby/
RUN bundle install --jobs 300

ENV LANG=C.UTF-8
