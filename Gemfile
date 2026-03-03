source "https://rubygems.org"

gem "jekyll"
gem "rack"
gem "webrick"

group :jekyll_plugins do
  gem "jekyll-feed"
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", :install_if => Gem.win_platform?
